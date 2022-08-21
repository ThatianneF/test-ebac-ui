Dado que eu acesso o site EBAC
Quando realizo o login com <usuario> e <senha> 
Então será direcionado ao checkout
Exemplo:
| usuario      | senha  |
|thati@ebac.com| 12345@ |
|joao@ebac.com | 12345@ |
|ana@ebac.com  | 12345@ |

Dado que eu acesso o site EBAC
Quando realizo o login com <usuario> e <senha>
Então deve mostrar a mensagem de alerta “Usuário ou senha inválidos”
Exemplo:
| usuario       | senha  |
|thati@ebac.com |        |
|               | 12345@ |
|               |        |