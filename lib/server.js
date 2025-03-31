"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const zod_1 = require("zod");
const server = new mcp_js_1.McpServer({
    name: 'betha-token-info',
    version: '1.0.0'
});
server.tool('verify-token', 'Verify an OAuth token and get its information', {
    accessToken: zod_1.z.string().describe('The OAuth access token to verify')
}, async ({ accessToken }) => {
    try {
        const response = await fetch(`https://plataforma-oauth.betha.cloud/auth/oauth2/tokeninfo?access_token=${accessToken}`);
        if (!response.ok) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error verifying token: ${response.statusText}`
                    }
                ]
            };
        }
        const tokenInfo = await response.json();
        const formattedInfo = [
            `Token Status:`,
            `- Expired: ${tokenInfo.expired}`,
            `- Expires in: ${tokenInfo.expires_in} seconds`,
            `- Valid: ${!tokenInfo.notFound}`,
            `\nClient Information:`,
            `- Name: ${tokenInfo.client?.name}`,
            `- Client ID: ${tokenInfo.client?.client_id}`,
            `\nScopes: ${tokenInfo.scopes?.join(', ') || 'None'}`,
            `\nUser ID: ${tokenInfo.user?.id || 'Not available'}`
        ].join('\n');
        return {
            content: [
                {
                    type: 'text',
                    text: formattedInfo
                }
            ]
        };
    }
    catch (error) {
        return {
            content: [
                {
                    type: 'text',
                    text: `Error verifying token: ${error instanceof Error ? error.message : String(error)}`
                }
            ]
        };
    }
});
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
}
main().catch((error) => {
    console.error('Fatal error in main():', error);
    process.exit(1);
});
