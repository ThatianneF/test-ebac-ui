Dado que eu acesso o site EBAC
Quando realizo o login com <usuario>,<senha> válidos
| usuário      | senha  |
|thati@ebac.com| 12345@ |
|joao@ebac.com | 12345@ |
|ana@ebac.com  | 12345@ |
Então será direcionado ao checkout

Dado que eu acesso o site EBAC
Quando realizo o login com <usuario>,<senha>, nulos
| usuário       | senha  |
|thati@ebac.com |        |
|               | 12345@ |
|               |        |
Então deve mostrar a mensagem de alerta “Usuário ou senha inválidos”

