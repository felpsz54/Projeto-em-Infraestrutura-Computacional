# Robertet Groupe — Infraestrutura de TI

![Projeto](https://img.shields.io/badge/Projeto-Infraestrutura%20de%20TI-blue)
![Redes](https://img.shields.io/badge/Redes-Computadores-green)
![Sistemas Operacionais](https://img.shields.io/badge/Sistemas%20Operacionais-SO-orange)
![IoT](https://img.shields.io/badge/IoT-Arduino-red)
![Arquitetura](https://img.shields.io/badge/Arquitetura-Computadores-purple)

## 1. Sobre o projeto

O projeto **Robertet Groupe** consiste no planejamento de uma infraestrutura de Tecnologia da Informação (TI) para uma unidade empresarial inspirada na empresa francesa Robertet, fundada em 1850 e reconhecida internacionalmente pelos setores de fragrâncias, aromas e ingredientes naturais.

O objetivo é desenvolver uma proposta de infraestrutura tecnológica segura, organizada e escalável, integrando redes de computadores, sistemas operacionais, arquitetura de computadores, organização empresarial e Internet das Coisas (IoT).

## 2. Estrutura da empresa

A empresa contará com um prédio de quatro andares, aproximadamente 60 funcionários e cerca de 54 computadores e notebooks.

| Andar | Departamentos |
|---|---|
| Térreo | Recepção, TI e sala de servidores |
| 1º andar | Comercial |
| 2º andar | Produção e Qualidade |
| 3º andar | Administrativo, RH e Diretoria |

### Características da infraestrutura

- Aproximadamente 60 funcionários.
- Cerca de 54 computadores e notebooks.
- Uma impressora por setor.
- Servidores internos para gerenciamento e armazenamento.
- Rede cabeada para os computadores corporativos.
- Wi-Fi corporativo e rede separada para visitantes.
- Crescimento estimado de 20% em dois a três anos.

## 3. Objetivos

- Planejar uma infraestrutura de rede eficiente.
- Organizar os equipamentos por departamento.
- Definir configurações de hardware compatíveis com as necessidades dos setores.
- Implementar mecanismos de segurança para proteger os dados corporativos.
- Planejar servidores para autenticação, arquivos, aplicações e backup.
- Desenvolver um protótipo de monitoramento de temperatura utilizando Arduino.
- Integrar as diferentes áreas de conhecimento em uma única proposta tecnológica.

## 4. Redes de computadores

A infraestrutura de rede será projetada para permitir a comunicação entre os departamentos, o acesso aos serviços corporativos e o controle do tráfego de dados.

### Equipamentos previstos

- Roteador e firewall.
- Switches gerenciáveis.
- Cabeamento Ethernet.
- Access Points para Wi-Fi.
- Servidores internos.
- Impressoras de rede.

### Distribuição dos Access Points

A proposta inicial prevê seis pontos de acesso:

- Térreo: 1 Access Point.
- 1º andar — Comercial: 2 Access Points.
- 2º andar — Produção e Qualidade: 2 Access Points.
- 3º andar: 1 Access Point.

A quantidade definitiva será validada conforme a cobertura do sinal e a capacidade necessária.

### VLANs planejadas

A rede será segmentada logicamente para aumentar a segurança e facilitar o gerenciamento.

- VLAN de TI e gerenciamento.
- VLAN Comercial.
- VLAN Produção e Qualidade.
- VLAN Administrativo, RH e Diretoria.
- VLAN de servidores.
- VLAN de impressoras e dispositivos IoT.
- VLAN de visitantes.

O endereçamento IP, as máscaras de sub-rede e as regras de comunicação serão definidos durante o planejamento de redes.

## 5. Sistemas operacionais e segurança

A proposta prevê servidores internos para centralizar serviços e facilitar o gerenciamento dos recursos tecnológicos.

### Serviços previstos

| Serviço | Função |
|---|---|
| Active Directory (AD) | Gerenciamento centralizado de usuários e permissões, caso seja utilizado Windows Server |
| DNS | Resolução de nomes dos dispositivos e servidores |
| DHCP | Distribuição automática de endereços IP |
| Servidor de arquivos | Compartilhamento de documentos corporativos |
| ERP e banco de dados | Suporte aos processos empresariais |
| Backup | Recuperação de informações em caso de falhas |

### Medidas de segurança

- Autenticação individual dos funcionários.
- Controle de permissões por departamento.
- Firewall para controlar o tráfego de rede.
- Antivírus ou proteção antimalware.
- Atualizações regulares dos sistemas.
- Backup periódico dos dados.
- VPN para acesso remoto autorizado.
- Segmentação da rede por VLANs.
- Restrição de acesso aos servidores.
- Controle de dispositivos autorizados na rede corporativa.

A rede cabeada será priorizada para os computadores da empresa. O acesso à internet será controlado por políticas de segurança. Essas medidas reduzem os riscos de invasões e infecções por malware, embora nenhuma medida isolada garanta proteção total.

## 6. Arquitetura de computadores

Os equipamentos serão definidos conforme as necessidades de cada departamento.

### Computadores dos funcionários

Configuração inicial sugerida:

- Processador Intel Core i3 ou i5, ou equivalente.
- Memória RAM de 8 GB.
- SSD de 256 GB ou superior.
- Sistema operacional compatível com o ambiente corporativo.
- Conexão Ethernet Gigabit.

Essa configuração atende às atividades comuns, como navegação, e-mail, documentos e utilização de sistemas empresariais.

### Computadores da equipe de TI

Configuração inicial sugerida:

- Processador Intel Core i5 ou superior, ou equivalente.
- Memória RAM de 16 GB ou mais.
- SSD de 512 GB ou superior.
- Conexão Ethernet Gigabit.
- Ferramentas de diagnóstico, administração de redes e gerenciamento de servidores.

### Servidores

Os servidores serão dimensionados de acordo com os serviços que hospedarão, o volume de dados, a quantidade de usuários e os requisitos de disponibilidade.

Serão considerados processador, memória RAM, armazenamento, redundância e estratégias de backup.

## 7. Internet das Coisas (IoT)

O projeto de IoT utilizará Arduino e o sensor de temperatura TMP36 para monitorar a temperatura ambiente e acionar LEDs de alerta.

### Componentes

- Arduino.
- Sensor de temperatura TMP36.
- LEDs de sinalização.
- Resistores.
- Protoboard e cabos de conexão.

### Funcionamento

1. O sensor TMP36 mede a temperatura ambiente.
2. O Arduino recebe e processa o sinal.
3. O programa compara a temperatura medida com um limite configurado.
4. Um LED é acionado quando a temperatura ultrapassa o limite estabelecido.

O protótipo demonstrará uma aplicação prática de IoT que poderá ser relacionada ao monitoramento ambiental, inclusive em uma sala de servidores.

## 8. Crescimento e escalabilidade

A infraestrutura será planejada considerando um crescimento estimado de 20% em dois a três anos.

Esse planejamento deverá considerar:

- Portas disponíveis nos switches.
- Faixas de endereçamento IP.
- Capacidade de armazenamento.
- Recursos de processamento e memória dos servidores.
- Quantidade de licenças.
- Cobertura Wi-Fi.
- Capacidade de backup.
- Pontos de rede disponíveis.

O objetivo é permitir a expansão da empresa sem exigir a substituição imediata de toda a infraestrutura.

## 9. Etapas de desenvolvimento

1. Definir a estrutura da empresa e a distribuição dos departamentos.
2. Levantar a quantidade de computadores, impressoras e servidores.
3. Definir as configurações dos equipamentos.
4. Elaborar a topologia de rede e o plano de endereçamento IP.
5. Planejar as VLANs e as regras de segurança.
6. Definir os serviços dos servidores.
7. Desenvolver o protótipo de IoT.
8. Organizar a documentação em Markdown e PDF.
9. Integrar e revisar as entregas.
10. Preparar a apresentação final.

## 10. Resultados esperados

Ao final do projeto, espera-se apresentar:

- Estrutura organizacional documentada.
- Distribuição dos equipamentos por departamento.
- Planejamento de hardware para computadores e servidores.
- Topologia de rede e segmentação por VLANs.
- Proposta de segurança da infraestrutura.
- Protótipo de monitoramento de temperatura com Arduino.
- Documentação técnica do projeto.
- Relatório e apresentação final.

## 11. Considerações finais

O projeto Robertet Groupe busca demonstrar como o planejamento integrado de TI contribui para a organização, a segurança e a eficiência de uma empresa.

A integração entre Redes de Computadores, Sistemas Operacionais, Arquitetura de Computadores, Organização Empresarial e IoT permitirá desenvolver uma proposta tecnológica que atenda às necessidades atuais e considere a expansão futura.

As configurações e decisões técnicas serão refinadas ao longo do desenvolvimento, de acordo com as necessidades identificadas pelo grupo.

## 12. Referência institucional

Site oficial da empresa Robertet:

https://www.robertet.com/

---

**Projeto acadêmico — Robertet Groupe**

*Redes de Computadores | Sistemas Operacionais | Arquitetura de Computadores | IoT*
