Dado que eu acesse o portal com o <usuario> e <senha>
Quando eu acessar o cadastro com os dados obrigatórios
Então deve exibir uma mensagem: "Cadastro realizado com sucesso"
Exemplo:
| usuário        | senha  |
|thati@ebac.com  | 12345@ |
|joao@ebac.com   | 12345@ |
|ana@ebac.com    | 12345@ |
|amanda@ebac.com | 12345@ |
|gerson@ebac.com | 12345@ |
|fabio@ebac.com  | 12345@ |

Dado que eu acesse o portal com o <usuario> e <senha>
Quando é feito o cadastro com os dados obrigatórios errados
Então deve exibir uma mensagem de erro: "Cadastro não realizado"
Exemplo:
| usuário     | senha  |
|thatibac.com | 12345@ |
|joao.com     | 12345@ |
|ac.com       | 12345@ |
|amanda@eba   | 12345@ |
|gerbac.com   | 12345@ |
|fcom         | 12345@ |

Dado que eu acesse o portal com os usuários e/ou senhas com campos vazios
Quando eu acessar o cadastro 
Então deve exibir uma mensagem de erro: "Cadastro não realizado campo vazio"