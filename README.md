[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/castrozan-token-info-mcp-badge.png)](https://mseep.ai/app/castrozan-token-info-mcp)

# Token Info MCP

[![LightNow capabilities](https://lightnow.ai/badge/io.github.Castrozan/token-info-mcp)](https://lightnow.ai/servers/io.github.Castrozan/token-info-mcp)

Servidor MCP (Model Context Protocol) para validação de tokens OAuth da Betha Sistemas.

> Acesse em https://www.npmjs.com/package/@castrozan/token-info-mcp

## 📋 Descrição

Este projeto fornece uma ferramenta para verificar e obter informações detalhadas sobre tokens OAuth da Betha.
Ele é implementado como um servidor MCP que pode ser integrado com ferramentas client que suportam o protocolo MCP.

Como:

- Claude Desktop
- Cursor
- Windsurf

## 🚀 Funcionalidades

- Verificação de tokens OAuth
- Informações detalhadas sobre o token:
    - Status de expiração
    - Tempo restante de validade
    - Informações do cliente
    - Escopos associados
    - ID do usuário

## 💻 Uso

### Claude Desktop

Para configurar o servidor no Claude Desktop, adicione a seguinte configuração ao seu arquivo de configuração:

```json
{
    "mcpServers": {
        "token-info": {
            "command": "npx",
            "args": ["@castrozan/token-info-mcp@latest"]
        }
    }
}
```

### Cursor

No Cursor, você pode registrar o servidor através da interface gráfica:

1. Abra as configurações do Cursor
2. Navegue até a seção de servidores MCP
3. Clique em "Adicionar Novo Servidor"
4. Configure o comando como `npx token-info-mcp@latest`

## 📚 API

O servidor expõe a seguinte ferramenta MCP:

### verify-token

Verifica um token OAuth e retorna suas informações.

**Parâmetros:**

- `accessToken` (string): O token de acesso OAuth a ser verificado

**Retorno:**

- Informações detalhadas sobre o token, incluindo status de expiração, cliente, escopos e usuário

## 👥 Autor

**Lucas Zanoni**

- Email: castro [dot] lucas290 [at] gmail [dot] com
- GitLab: [Perfil](https://github.com/Castrozan)
