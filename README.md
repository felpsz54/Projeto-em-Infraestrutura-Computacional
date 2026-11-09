# Robertet Groupe — Infraestrutura de TI

![Projeto](https://img.shields.io/badge/Projeto-Infraestrutura%20de%20TI-blue)
![Redes](https://img.shields.io/badge/Redes-Computadores-green)
![Sistemas Operacionais](https://img.shields.io/badge/Sistemas%20Operacionais-SO-orange)
![IoT](https://img.shields.io/badge/IoT-Arduino-red)
![Arquitetura](https://img.shields.io/badge/Arquitetura-Computadores-purple)

## 1. Sobre o projeto

O projeto **Robertet Groupe** consiste no planejamento de uma infraestrutura de Tecnologia da Informação (TI) para uma unidade empresarial inspirada na empresa francesa Robertet, fundada em 1850 e reconhecida internacionalmente pelos setores de fragrâncias, aromas e ingredientes naturais.

O objetivo é desenvolver uma infraestrutura tecnológica segura, organizada e escalável, integrando redes de computadores, sistemas operacionais, arquitetura de computadores, organização empresarial e Internet das Coisas (IoT).

A proposta considera as necessidades dos departamentos, a quantidade de funcionários, os equipamentos utilizados, a comunicação interna e a possibilidade de expansão da empresa.

## 2. Estrutura da empresa

A unidade contará com um prédio de quatro andares, aproximadamente 60 funcionários e 54 computadores e notebooks.

### Distribuição dos departamentos

| Andar | Departamentos e ambientes |
|---|---|
| Térreo | Recepção, Produção e Qualidade |
| 1º andar | Comercial, TI, sala de servidores, treinamento e demonstração, arquivo e estoque de amostras |
| 2º andar | Administrativo, RH, compras, logística, treinamento, entrevistas, atendimento do RH e almoxarifado |
| 3º andar | Diretoria, secretaria executiva, copa executiva, área de estar, apresentações, terraço e três salas de diretoria |

### Quantidade de funcionários e computadores

| Setor | Andar | Funcionários | Computadores |
|---|---|---:|---:|
| Recepção | Térreo | 3 | 3 |
| Produção | Térreo | 10 | 10 |
| Qualidade | Térreo | 6 | 6 |
| Comercial | 1º andar | 17 | 17 |
| TI | 1º andar | 5 | 5 |
| Administrativo | 2º andar | 5 | 5 |
| RH | 2º andar | 4 | 4 |
| Diretoria | 3º andar | 4 | 4 |
| Limpeza | Todos os andares | 2 | 0 |
| Copa | Todos os andares | 2 | 0 |
| Manutenção | Todos os andares | 2 | 0 |
| **Total** | | **60** | **54** |

Os seis funcionários de limpeza, copa e manutenção não possuem postos fixos com computadores.

### Computadores por andar

| Andar | Computadores |
|---|---:|
| Térreo | 19 |
| 1º andar | 22 |
| 2º andar | 9 |
| 3º andar | 4 |
| **Total** | **54** |

### Características gerais

- 60 funcionários.
- 54 computadores e notebooks.
- Impressoras de rede: previsão inicial de quatro ou mais unidades.
- Quatro switches de acesso, um por andar.
- Um switch principal (core).
- Seis Access Points Wi-Fi 6.
- Um a dois servidores físicos previstos.
- Crescimento estimado de 20% em dois a três anos.

## 3. Objetivos

- Planejar uma infraestrutura de rede eficiente.
- Organizar os equipamentos por departamento.
- Definir configurações de hardware compatíveis com as necessidades dos setores.
- Implementar mecanismos de segurança para proteger os dados corporativos.
- Planejar servidores para autenticação, arquivos, aplicações e backup.
- Desenvolver um protótipo de monitoramento de temperatura utilizando Arduino.
- Garantir compatibilidade entre os equipamentos e sistemas.
- Estimar os custos necessários para a infraestrutura.
- Preparar uma estrutura que permita o crescimento da empresa.

## 4. Redes de computadores

A infraestrutura de rede será projetada utilizando uma **topologia em estrela hierárquica**, permitindo a comunicação entre os departamentos, o acesso aos serviços corporativos e o gerenciamento centralizado da rede.

### Topologia de rede

A estrutura de conexão seguirá a seguinte organização:

```text
                  INTERNET
                      |
               ROTEADOR / FIREWALL
                      |
              SWITCH PRINCIPAL (CORE)
                      |
        +-------------+-------------+
        |             |             |
     SWITCH         SWITCH        SWITCH
     TÉRREO         1º ANDAR      2º ANDAR
        |             |             |
     PCs/APs       PCs/APs       PCs/APs

                      |
                   SWITCH
                  3º ANDAR
                      |
                    PCs/APs
```

O switch principal será responsável pela distribuição da conexão para os quatro switches de acesso, que atenderão os respectivos andares.

A sala técnica ficará no 1º andar, junto ao departamento de TI, com acesso restrito.

### Equipamentos de rede

| Equipamento | Quantidade | Especificação |
|---|---:|---|
| Roteador / Firewall | 1 | Suporte a VLANs, VPN e regras de segurança |
| Switch principal (Core) | 1 | Gerenciável, com uplinks para switches de acesso e servidores |
| Switches de acesso | 4 | Um por andar; 24 portas como hipótese inicial |
| Access Points | 6 | Wi-Fi 6, distribuídos pelos andares |
| Cabeamento | A dimensionar | Cabeamento estruturado Cat 6 como proposta inicial |

### Distribuição dos Access Points

| Andar | Quantidade |
|---|---:|
| Térreo | 1 |
| 1º andar | 2 |
| 2º andar | 2 |
| 3º andar | 1 |
| **Total** | **6** |

A cobertura e a capacidade dos pontos de acesso deverão ser verificadas conforme a estrutura física e a quantidade de dispositivos conectados.

### VLANs e endereçamento IP

A rede será segmentada logicamente para aumentar a segurança e facilitar o gerenciamento dos departamentos.

| VLAN | Identificação | Rede / IP |
|---:|---|---|
| 10 | TI / Usuários | 10.50.10.0/27 |
| 15 | Wi-Fi Corporativo | 10.50.15.0/25 |
| 20 | Comercial | 10.50.20.0/26 |
| 30 | Produção e Qualidade | 10.50.30.0/26 |
| 40 | Administrativo e RH | 10.50.40.0/26 |
| 50 | Diretoria | 10.50.50.0/27 |
| 60 | Servidores | 10.50.60.0/27 |
| 70 | Impressoras | 10.50.70.0/27 |
| 80 | IoT | 10.50.80.0/27 |
| 90 | Visitantes | 10.50.90.0/26 |
| 99 | Gerenciamento de rede | 10.50.99.0/27 |

Cada VLAN terá uma finalidade específica, permitindo controlar o acesso aos recursos corporativos.

A rede de visitantes terá acesso à internet, sem comunicação com a rede interna da empresa. Os dispositivos IoT também permanecerão isolados, com acesso somente aos serviços necessários.

### Cabeamento e segurança

- Cabeamento estruturado Cat 6 como proposta inicial.
- Conexão cabeada para computadores, impressoras, servidores e Access Points.
- Uplinks adequados entre os switches.
- Firewall com regras de comunicação entre VLANs.
- Wi-Fi corporativo separado do Wi-Fi de visitantes.
- Acesso restrito à sala de servidores.
- Reserva de portas e pontos de rede para expansão.

## 5. Sistemas operacionais e segurança

A proposta prevê servidores internos para centralizar serviços e facilitar o gerenciamento dos recursos tecnológicos.

### Serviços previstos

| Serviço | Função |
|---|---|
| Active Directory (AD) | Gerenciamento centralizado de usuários e permissões |
| DNS | Resolução de nomes dos dispositivos e servidores |
| DHCP | Distribuição automática de endereços IP |
| Servidor de arquivos | Compartilhamento de documentos corporativos |
| ERP | Gerenciamento dos processos empresariais |
| Banco de dados | Armazenamento das informações dos sistemas |
| Backup | Proteção e recuperação das informações |
| Impressão | Gerenciamento das impressoras de rede |

### Medidas de segurança

- Autenticação individual dos funcionários.
- Controle de permissões por departamento.
- Firewall para controlar o tráfego de rede.
- Antivírus e proteção antimalware.
- Atualizações regulares dos sistemas.
- Backup periódico dos dados.
- VPN para acesso remoto autorizado.
- Segmentação da rede por VLANs.
- Restrição de acesso aos servidores.
- Controle de dispositivos autorizados na rede corporativa.

A rede cabeada será priorizada para os computadores da empresa. O acesso à internet será controlado por políticas de segurança, reduzindo os riscos de invasões e infecções por malware.

A segurança será baseada na combinação de firewall, autenticação, segmentação, atualizações, proteção dos equipamentos e backup.

## 6. Arquitetura de computadores

A arquitetura dos computadores será definida conforme as necessidades de cada departamento, considerando desempenho, compatibilidade, capacidade de processamento, armazenamento, energia e custos.

### 6.1 Computadores por perfil

A proposta utiliza modelos corporativos de referência para padronizar os equipamentos e facilitar a manutenção.

| Perfil | Setor | Quantidade | Modelo de referência |
|---|---|---:|---|
| Atendimento | Recepção | 3 | Lenovo ThinkCentre neo 50q Gen 4 |
| Escritório | Administrativo e RH | 9 | Lenovo ThinkCentre neo 50q Gen 4 |
| Comercial | Comercial | 17 | Lenovo ThinkPad E14 Gen 6 |
| Operacional | Produção e Qualidade | 16 | Dell OptiPlex Micro i5-13500T |
| Técnico | TI | 5 | Dell OptiPlex Micro Plus i5-14500 |
| Direção | Diretoria | 4 | Lenovo ThinkPad T14 |
| **Total** | | **54** | |

### 6.2 Configurações dos computadores

**Atendimento — Lenovo ThinkCentre neo 50q Gen 4**

- Processador Intel Core i5-13420H.
- 16 GB DDR4-3200.
- SSD de 512 GB M.2 PCIe 4.0.
- Wi-Fi 6 e Ethernet.
- Windows 11 Pro.

Justificativa: adequado para atendimento, cadastro de visitantes, e-mail, softphone e sistemas internos, além de ocupar pouco espaço no balcão.

**Escritório — Lenovo ThinkCentre neo 50q Gen 4**

- Processador Intel Core i5-13420H.
- 16 GB DDR4-3200.
- SSD de 512 GB M.2 PCIe 4.0.
- Wi-Fi 6 e Ethernet.
- Windows 11 Pro.

Justificativa: atende às atividades administrativas, planilhas, documentos e sistemas de gestão, oferecendo desempenho para multitarefa.

**Comercial — Lenovo ThinkPad E14 Gen 6**

- Processador Intel Core Ultra 5 125U.
- 16 GB DDR5-5600.
- SSD NVMe de 512 GB PCIe Gen 4.
- Wi-Fi 6 e Ethernet RJ-45.
- HDMI 2.1 e Thunderbolt 4.
- Tela de 14 polegadas.
- Windows 11 Pro.

Justificativa: notebook destinado à equipe comercial, que necessita de mobilidade para reuniões, visitas e apresentações aos clientes.

**Operacional — Dell OptiPlex Micro i5-13500T**

- Processador Intel Core i5-13500T.
- 16 GB DDR4-3200.
- SSD M.2 de 512 GB.
- Wi-Fi e conexão cabeada.
- Windows 11 Pro.

Justificativa: atende às atividades de produção, utilização de sistemas operacionais internos, elaboração de laudos e relatórios de qualidade.

**Técnico — Dell OptiPlex Micro Plus i5-14500**

- Processador Intel Core i5-14500.
- 32 GB DDR5-5600 (2 × 16 GB).
- SSD M.2 de 512 GB.
- Wi-Fi e rede cabeada.
- Windows 11 Pro.

Justificativa: equipamento com maior capacidade de memória e processamento para administração de servidores, suporte técnico, gerenciamento de redes, máquinas virtuais e Packet Tracer.

**Direção — Lenovo ThinkPad T14**

- Processador Intel Core i5-1335U.
- 16 GB DDR5-5200.
- SSD NVMe de 512 GB com Opal 2.0.
- Wi-Fi 6E.
- Plataforma Intel vPro.
- Windows 11 Pro.

Justificativa: notebook corporativo para a diretoria, com recursos de segurança, mobilidade e suporte a videoconferências e apresentações.

### 6.3 Servidor principal

Modelo de referência: **Dell PowerEdge T160**.

| Componente | Especificação |
|---|---|
| Processador | Intel Xeon E-2434 |
| Núcleos | 4 |
| Frequência base | 3,4 GHz |
| Memória RAM | 32 GB DDR5 ECC UDIMM |
| Expansão de RAM | Até 128 GB |
| Controladora RAID | Dell PERC H755, conforme configuração prevista |
| Armazenamento | 3 discos SATA de 4 TB |
| Fonte | 300 W |
| Gerenciamento remoto | iDRAC9 Enterprise |

O servidor será utilizado para hospedar máquinas virtuais e serviços corporativos, incluindo controlador de domínio, arquivos, impressão e sistema interno.

A configuração definitiva da controladora e dos discos deverá ser confirmada no configurador do fabricante.

### 6.4 Compatibilidade dos componentes

A compatibilidade será verificada considerando:

- Tipo e frequência das memórias RAM.
- Limite máximo de memória suportado.
- Interfaces de armazenamento M.2 e SATA.
- Compatibilidade com Windows 11 Pro.
- Compatibilidade do servidor com Windows Server e hipervisores.
- Portas Ethernet e conectividade Wi-Fi.
- Compatibilidade da controladora RAID com os discos instalados.

A compatibilidade do sistema operacional do servidor deverá ser alinhada com o planejamento da equipe de Sistemas Operacionais.

### 6.5 RAID e armazenamento

O servidor utilizará três discos SATA de 4 TB, com proposta de configuração em **RAID 5**.

| RAID | Capacidade útil | Falhas toleradas |
|---|---:|---:|
| RAID 0 | 12 TB | 0 |
| RAID 1 | 4 TB | 1 |
| RAID 5 | 8 TB | 1 |
| RAID 6 | Não disponível com 3 baias | 2 |
| RAID 10 | Não disponível com 3 baias | 1 por par |

**RAID escolhido: RAID 5.**

Justificativa: oferece equilíbrio entre capacidade de armazenamento e proteção contra falha de um disco, utilizando as três baias disponíveis.

#### Necessidade de armazenamento

| Descrição | Capacidade |
|---|---:|
| Documentos dos funcionários (60 × 40 GB) | 2.400 GB |
| Dados compartilhados dos setores | 1.500 GB |
| Máquinas virtuais e sistemas | 1.000 GB |
| Crescimento previsto | 20% |
| **Necessidade total projetada** | **5,88 TB** |
| Capacidade útil do RAID 5 | 8 TB |
| Espaço disponível após a projeção | 2,12 TB |

A ocupação projetada será de aproximadamente 73,5% da capacidade útil.

#### Armazenamento de backup

Será utilizado um NAS de duas baias, com dois discos de 10 TB em RAID 1.

- Capacidade bruta: 20 TB.
- Capacidade útil: 10 TB.
- Necessidade projetada com retenção: 8,82 TB.
- Resultado: atende à necessidade estimada.

O RAID não substitui o backup. A cópia de segurança deverá permanecer separada do ambiente principal, com testes periódicos de restauração.

### 6.6 Memória RAM do servidor

A distribuição estimada de memória para o servidor e suas máquinas virtuais será:

| Serviço | RAM |
|---|---:|
| Sistema host / Hipervisor | 4 GB |
| Controlador de domínio | 4 GB |
| Servidor de arquivos | 8 GB |
| Impressão e serviços de rede | 4 GB |
| Sistema interno / Aplicação | 8 GB |
| **Total necessário** | **28 GB** |
| **RAM instalada** | **32 GB** |

A configuração de 32 GB atende à estimativa inicial de 28 GB, mantendo uma pequena margem de memória disponível.

### 6.7 Energia e nobreak

A sala de TI contará com proteção elétrica para os equipamentos essenciais.

Equipamentos considerados no dimensionamento:

| Equipamento | Quantidade | Potência unitária |
|---|---:|---:|
| Servidor PowerEdge T160 | 1 | 300 W |
| Switch principal | 1 | 150 W |
| Firewall / Roteador | 1 | 40 W |
| **Carga total** | | **490 W** |

Parâmetros utilizados:

- Margem de segurança: 25%.
- Fator de potência: 0,9.
- Autonomia desejada: 15 minutos.
- Eficiência do conjunto de bateria e inversor: 85%.

**Nobreak selecionado: 1.000 VA.**

A energia mínima estimada para a bateria é de aproximadamente 144 Wh, considerando a carga e a autonomia planejadas.

A autonomia real deverá ser confirmada na ficha técnica do nobreak escolhido.

Também será necessário utilizar proteção contra surtos elétricos e manter a sala técnica com ventilação e climatização adequadas.

### 6.8 Orçamento e custos

O orçamento contempla os seguintes itens:

- Computadores e notebooks por perfil.
- Monitores de 24 polegadas Full HD IPS para os desktops.
- Kits de teclado e mouse.
- Servidor Dell PowerEdge T160.
- Nobreak da sala de TI.
- Impressoras multifuncionais laser de rede.
- NAS e discos para backup.
- Filtros de linha com proteção contra surtos.

Os valores unitários e as cotações ainda precisam ser preenchidos na planilha de orçamento. Portanto, o custo total da infraestrutura permanece pendente de cotação.

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

O protótipo demonstrará uma aplicação prática de IoT relacionada ao monitoramento ambiental, podendo ser utilizado como exemplo para a sala de servidores.

Caso o dispositivo seja conectado à rede, deverá permanecer isolado na VLAN de IoT, com acesso somente aos serviços necessários.

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
- Expansão dos equipamentos e postos de trabalho.

A previsão de crescimento será considerada no dimensionamento dos equipamentos e na organização da infraestrutura.

## 9. Etapas de desenvolvimento

1. Definir a estrutura da empresa e a distribuição dos departamentos.
2. Levantar a quantidade de funcionários e computadores.
3. Definir os modelos e configurações dos equipamentos.
4. Elaborar a topologia de rede.
5. Planejar as VLANs e o endereçamento IP.
6. Definir os serviços e sistemas operacionais dos servidores.
7. Planejar RAID, backup e proteção elétrica.
8. Realizar o levantamento dos custos.
9. Desenvolver o protótipo de IoT.
10. Integrar e revisar as entregas.
11. Preparar a apresentação final.

## 10. Resultados esperados

Ao final do projeto, espera-se apresentar:

- Estrutura organizacional documentada.
- Distribuição dos funcionários e equipamentos por andar.
- Configurações de hardware justificadas por departamento.
- Planejamento de servidores e compatibilidade.
- Dimensionamento de RAID e backup.
- Planejamento de energia e nobreak.
- Levantamento dos custos da infraestrutura.
- Topologia de rede e segmentação por VLANs.
- Proposta de segurança da infraestrutura.
- Protótipo de monitoramento de temperatura com Arduino.
- Documentação técnica do projeto.
- Relatório e apresentação final.

## 11. Considerações finais

O projeto Robertet Groupe busca demonstrar como o planejamento integrado de TI contribui para a organização, segurança e eficiência de uma empresa.

A integração entre Redes de Computadores, Sistemas Operacionais, Arquitetura de Computadores, Organização Empresarial e IoT permitirá desenvolver uma proposta tecnológica que atenda às necessidades atuais e considere a expansão futura.

As configurações apresentadas representam o dimensionamento inicial do projeto e poderão ser ajustadas conforme os testes, as cotações e a validação técnica de cada área.

## 12. Referência institucional

Site oficial da empresa Robertet:

https://www.robertet.com/

---

**Projeto acadêmico — Robertet Groupe**

*Redes de Computadores | Sistemas Operacionais | Arquitetura de Computadores | IoT*
