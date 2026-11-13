# Robertet Groupe — Infraestrutura de TI

![Projeto](https://img.shields.io/badge/Projeto-Infraestrutura%20de%20TI-blue)
![Redes](https://img.shields.io/badge/Redes-Computadores-green)
![Sistemas Operacionais](https://img.shields.io/badge/Sistemas%20Operacionais-SO-orange)
![IoT](https://img.shields.io/badge/IoT-Arduino-red)
![Arquitetura](https://img.shields.io/badge/Arquitetura-Computadores-purple)

## 1. Sobre o projeto

O projeto **Robertet Groupe** consiste no planejamento de uma infraestrutura de Tecnologia da Informação (TI) para uma unidade empresarial inspirada na empresa francesa Robertet, reconhecida pelos setores de fragrâncias, aromas e ingredientes naturais.

O objetivo é desenvolver uma infraestrutura tecnológica segura, organizada e escalável, integrando redes de computadores, sistemas operacionais, arquitetura de computadores, organização empresarial e Internet das Coisas (IoT).

A proposta considera as necessidades dos departamentos, a quantidade de funcionários, os equipamentos utilizados, a comunicação interna e a possibilidade de expansão da empresa.

## 2. Estrutura da empresa

A unidade contará com um prédio de quatro andares, **60 funcionários e 54 computadores**.

### Distribuição dos departamentos

| Andar | Departamentos e ambientes |
|---|---|
| Térreo | Recepção, Produção e Qualidade |
| 1º andar | Comercial, TI, sala de servidores, treinamento e demonstração, arquivo e estoque de amostras |
| 2º andar | Administrativo, RH, compras, logística, treinamento, entrevistas, atendimento do RH e almoxarifado |
| 3º andar | Diretoria, secretaria executiva, copa executiva, área de estar, apresentações, terraço e salas de diretoria |

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

Os funcionários de limpeza, copa e manutenção não possuem computadores fixos previstos no levantamento.

### Computadores por andar

| Andar | Computadores |
|---|---:|
| Térreo | 19 |
| 1º andar | 22 |
| 2º andar | 9 |
| 3º andar | 4 |
| **Total** | **54** |

A previsão de crescimento da empresa é de 20% em dois a três anos.

## 3. Objetivos

- Planejar uma infraestrutura de rede eficiente.
- Organizar os equipamentos por departamento.
- Definir configurações de hardware compatíveis com as necessidades dos setores.
- Implementar mecanismos de segurança para proteger os dados corporativos.
- Planejar servidores para autenticação, arquivos, aplicações e backup.
- Desenvolver um protótipo de monitoramento de temperatura utilizando Arduino.
- Verificar a compatibilidade entre os equipamentos e sistemas.
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
          +------------+------------+
          |            |            |
       SWITCH        SWITCH       SWITCH
       TÉRREO        1º ANDAR     2º ANDAR
          |            |            |
        PCs/APs      PCs/APs      PCs/APs

                       |
                    SWITCH
                   3º ANDAR
                       |
                     PCs/APs
```

O switch principal será responsável pela distribuição da conexão para os switches de acesso, que atenderão os respectivos andares.

A sala técnica ficará no 1º andar, junto ao departamento de TI, com acesso restrito.

### Equipamentos de rede previstos

| Equipamento | Quantidade | Especificação |
|---|---:|---|
| Roteador / Firewall | 1 | TP-Link Omada ER7206, conforme dimensionamento |
| Switch principal (Core) | 1 | TP-Link Omada TL-SG3452X |
| Switches de acesso | 4 | Um por andar; 24 portas como proposta inicial |
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

A proposta prevê um servidor interno para centralizar serviços e facilitar o gerenciamento dos recursos tecnológicos.

### Serviços previstos

| Serviço | Função |
|---|---|
| Active Directory (AD) | Gerenciamento centralizado de usuários e permissões |
| DNS | Resolução de nomes dos dispositivos e servidores |
| DHCP | Distribuição automática de endereços IP |
| Servidor de arquivos | Compartilhamento de documentos corporativos |
| ERP e aplicação interna | Suporte aos processos empresariais |
| Banco de dados | Armazenamento das informações dos sistemas |
| Impressão | Gerenciamento das impressoras de rede |
| Backup | Proteção e recuperação das informações |

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

## 6. Arquitetura de computadores

A arquitetura dos computadores foi dimensionada conforme as necessidades de cada departamento, considerando desempenho, compatibilidade, capacidade de processamento, armazenamento, energia e custos.

### 6.1 Computadores por perfil

| Perfil | Setor | Quantidade | Modelo de referência |
|---|---|---:|---|
| Atendimento | Recepção | 3 | Lenovo ThinkCentre neo 50q Gen 4 |
| Escritório | Administrativo e RH | 9 | Lenovo ThinkCentre neo 50q Gen 4 |
| Comercial | Comercial | 17 | Lenovo ThinkPad E14 Gen 6 |
| Operacional | Produção e Qualidade | 16 | Dell OptiPlex Micro i5-13500T |
| Técnico (TI) | TI | 5 | Dell OptiPlex Micro Plus i5-14500 |
| Direção | Diretoria | 4 | Lenovo ThinkPad T14 |
| **Total** | | **54** | |

### 6.2 Configurações dos computadores

**Atendimento — Lenovo ThinkCentre neo 50q Gen 4**

- Processador Intel Core i5-13420H (8 núcleos, 12 threads, até 4,6 GHz).
- 16 GB DDR4-3200 SODIMM, expansível até 64 GB.
- SSD de 512 GB M.2 PCIe 4.0.
- Wi-Fi 6 e Ethernet.
- Windows 11 Pro.

Justificativa: adequado para cadastro de visitantes, e-mail, softphone e sistema interno. O formato mini PC ocupa pouco espaço no balcão e padroniza o suporte com o perfil Escritório.

**Escritório — Lenovo ThinkCentre neo 50q Gen 4**

- Processador Intel Core i5-13420H (8 núcleos, 12 threads, até 4,6 GHz).
- 16 GB DDR4-3200 SODIMM, expansível até 64 GB.
- SSD de 512 GB M.2 PCIe 4.0.
- Wi-Fi 6 e Ethernet.
- Windows 11 Pro.

Justificativa: atende às atividades administrativas, planilhas, documentos, sistemas de gestão e multitarefa.

**Comercial — Lenovo ThinkPad E14 Gen 6**

- Processador Intel Core Ultra 5 125U (12 núcleos).
- 16 GB DDR5-5600 (1 × 16 GB).
- SSD de 512 GB NVMe PCIe Gen 4.
- Wi-Fi 6 e Ethernet RJ-45.
- HDMI 2.1 e Thunderbolt 4.
- Tela de 14 polegadas WUXGA.
- Bateria de 47 Wh.
- Windows 11 Pro.

Justificativa: notebook destinado à equipe comercial, que necessita de mobilidade para reuniões, visitas e apresentações a clientes.

**Operacional — Dell OptiPlex Micro i5-13500T**

- Processador Intel Core i5-13500T.
- 16 GB DDR4-3200.
- SSD de 512 GB M.2 PCIe.
- Wi-Fi e porta de rede cabeada RJ45.
- Teclado Dell KB216 e mouse MS116 incluídos.
- Windows 11 Pro.

Justificativa: atende ao uso contínuo em turnos, sistemas de produção, laudos e relatórios de qualidade. O formato compacto facilita a instalação em bancadas e laboratórios.

**Técnico (TI) — Dell OptiPlex Micro Plus i5-14500**

- Processador Intel Core i5-14500.
- 32 GB DDR5-5600 (2 × 16 GB).
- SSD de 512 GB M.2 PCIe.
- Wi-Fi e rede cabeada Ethernet.
- Teclado e mouse Dell KM5221W, conforme listagem.
- Windows 11 Pro.

Justificativa: a equipe de TI administra servidores e redes, executa máquinas virtuais de teste e utiliza ferramentas como Packet Tracer. Por isso, necessita de mais memória e processamento. O modelo deve ser configurado com 32 GB, pois a listagem de referência apresenta configuração inicial de 16 GB.

**Direção — Lenovo ThinkPad T14**

- Processador Intel Core i5-1335U (10 núcleos, até 4,6 GHz).
- 16 GB DDR5-5200.
- SSD de 512 GB M.2 2280 PCIe 4.0 NVMe com Opal 2.0.
- Wi-Fi 6E.
- Tela de 14 polegadas WUXGA.
- Plataforma Intel vPro.
- Windows 11 Pro.

Justificativa: notebook corporativo para a diretoria, com recursos de segurança, mobilidade, videoconferências e apresentações.

### 6.3 Servidor principal

**Modelo: Dell PowerEdge T160**

| Componente | Especificação |
|---|---|
| Processador | Intel Xeon E-2434, 4 núcleos, 3,4 GHz |
| Memória RAM | 32 GB DDR5 ECC UDIMM (2 × 16 GB) |
| Expansão de memória | 4 slots, máximo de 128 GB |
| Controladora RAID | Dell PERC H755 |
| Armazenamento | 3 discos SATA de 4 TB, 7.200 rpm |
| Baias | 3 × 3,5" SATA cabladas |
| Fonte | 300 W cabeada |
| Gerenciamento remoto | iDRAC9 Enterprise |

O servidor físico será responsável por hospedar as máquinas virtuais e os serviços corporativos. A configuração de 32 GB de RAM atende à distribuição de memória prevista na planilha, totalizando 28 GB para o host e os serviços virtualizados.

### 6.4 Windows Server e virtualização

O servidor Dell PowerEdge T160 utilizará **Windows Server com virtualização por hipervisor**, permitindo organizar os serviços corporativos em máquinas virtuais.

A distribuição de memória planejada é:

| Serviço / ambiente | Memória RAM |
|---|---:|
| Sistema host / hipervisor | 4 GB |
| Controlador de domínio | 4 GB |
| Servidor de arquivos | 8 GB |
| Impressão e serviços de rede | 4 GB |
| Sistema interno / aplicação | 8 GB |
| **Total necessário** | **28 GB** |
| **Memória instalada** | **32 GB** |

A memória instalada deixa uma margem de 4 GB sobre a distribuição estimada. O dimensionamento deverá ser acompanhado durante a utilização para verificar o consumo real.

A planilha de orçamento prevê duas licenças Windows Server Standard de 16 núcleos. Cada licença foi considerada no orçamento com direito a duas máquinas virtuais, conforme a descrição registrada na planilha. As CALs de acesso são orçadas separadamente.

### 6.5 Compatibilidade dos componentes

A compatibilidade foi organizada considerando:

- **ThinkCentre neo 50q Gen 4:** memória DDR4-3200 SODIMM, até 64 GB; SSD M.2 PCIe 4.0; Wi-Fi 6 e Ethernet; Windows 11 Pro.
- **ThinkPad E14 Gen 6:** memória DDR5-5600; SSD M.2 NVMe PCIe Gen 4; Wi-Fi 6 e Ethernet RJ-45; Windows 11 Pro.
- **Dell OptiPlex Micro i5-13500T:** memória DDR4-3200, dois slots; SSD M.2 PCIe; WLAN e porta RJ45; Windows 11 Pro.
- **Dell OptiPlex Micro Plus i5-14500:** memória DDR5-5600, dois slots e máximo de 64 GB; SSD M.2 PCIe; Ethernet; Windows 11 Pro.
- **Lenovo ThinkPad T14:** memória DDR5-5200; SSD M.2 2280 PCIe 4.0 NVMe Opal 2.0; Wi-Fi 6E; Windows 11 Pro.
- **Dell PowerEdge T160:** memória DDR5 ECC UDIMM, quatro slots e máximo de 128 GB; três baias SATA de 3,5"; compatibilidade com Windows Server.

A PERC H755 foi escolhida para permitir RAID 5. A combinação exata de controladora, discos e chassi deverá ser confirmada no configurador do fabricante.

### 6.6 RAID e armazenamento principal

O servidor utilizará três discos SATA de 4 TB, com configuração proposta em **RAID 5**.

| Nível RAID | Discos considerados | Capacidade útil | Falhas toleradas |
|---|---:|---:|---:|
| RAID 0 | 3 | 12 TB | 0 |
| RAID 1 | 2 | 4 TB | 1 |
| RAID 5 | 3 | 8 TB | 1 |
| RAID 6 | 4 | 8 TB | 2 |
| RAID 10 | 4 | 8 TB | 1 por par |

O RAID 5 foi escolhido por oferecer equilíbrio entre capacidade de armazenamento e tolerância à falha de um disco, utilizando as três baias disponíveis no servidor.

#### Necessidade de armazenamento

| Descrição | Capacidade |
|---|---:|
| Documentos dos funcionários (60 × 40 GB) | 2.400 GB |
| Dados compartilhados dos setores | 1.500 GB |
| Máquinas virtuais e sistemas | 1.000 GB |
| Crescimento previsto | 20% |
| **Necessidade total projetada** | **5.880 GB (5,88 TB)** |
| Capacidade útil do RAID 5 | 8 TB |
| **Folga estimada** | **2,12 TB** |

A ocupação projetada será de aproximadamente 73,5% da capacidade útil.

O RAID protege contra falha de disco, mas não substitui uma política de backup.

### 6.7 Armazenamento de backup

O backup será armazenado em um NAS separado do servidor principal, com dois discos de 10 TB em RAID 1.

| Descrição | Capacidade |
|---|---:|
| Necessidade projetada dos dados | 5,88 TB |
| Fator de retenção | 1,5 |
| Necessidade de backup | 8,82 TB |
| Capacidade útil do NAS em RAID 1 | 10 TB |
| **Resultado** | **Atende à estimativa** |

O equipamento de backup ficará separado do servidor para reduzir o risco de que uma falha ou incidente no servidor principal também comprometa as cópias.

### 6.8 Energia e nobreak

O nobreak protegerá os equipamentos essenciais da sala de TI. Os computadores dos funcionários utilizarão filtros de linha com proteção contra surtos.

#### Carga protegida pelo nobreak

| Equipamento | Quantidade | Potência unitária | Total |
|---|---:|---:|---:|
| Servidor PowerEdge T160 | 1 | 300 W | 300 W |
| Switch principal TP-Link TL-SG3452X | 1 | 32,72 W | 32,72 W |
| Firewall / roteador TP-Link ER7206 | 1 | 7,5 W | 7,5 W |
| **Carga total** | | | **340,22 W** |

#### Parâmetros do dimensionamento

- Margem de segurança: 25%.
- Fator de potência do nobreak: 0,9.
- Autonomia desejada: 15 minutos.
- Eficiência do conjunto bateria e inversor: 85%.
- Potência aparente necessária, com margem: aproximadamente 472,5 VA.
- **Nobreak calculado: 600 VA.**
- Energia mínima estimada da bateria: aproximadamente 100 Wh.

A planilha também contém uma cotação de nobreak senoidal de 1.000 VA. O modelo cotado deverá ser revisto em conjunto com o grupo, pois o cálculo atual indica 600 VA. A autonomia efetiva deverá ser confirmada na ficha técnica do equipamento escolhido.

### 6.9 Carga elétrica dos computadores

A planilha também considera a potência das fontes dos computadores e um fator de simultaneidade de 60% para estimar a carga em uso.

Os computadores serão protegidos por filtros de linha com proteção contra surtos. O nobreak será destinado à sala de TI, protegendo servidor, switch principal e firewall/roteador.

### 6.10 Orçamento e custos

A planilha de orçamento contém cotações para os principais equipamentos e licenças.

| Item | Quantidade prevista | Preço unitário registrado |
|---|---:|---:|
| Lenovo ThinkCentre neo 50q Gen 4 — Atendimento | 3 | R$ 4.231,00 |
| Lenovo ThinkCentre neo 50q Gen 4 — Escritório | 9 | R$ 4.231,00 |
| Lenovo ThinkPad E14 Gen 6 — Comercial | 17 | R$ 7.835,82 |
| Dell OptiPlex Micro i5-13500T — Operacional | 16 | R$ 5.199,00 |
| Dell OptiPlex Micro Plus i5-14500 — TI | 5 | R$ 7.254,00 |
| Lenovo ThinkPad T14 — Direção | 4 | R$ 5.025,27 |
| Monitor 24" Full HD IPS | 33 | R$ 469,00 |
| Servidor Dell PowerEdge T160 | 1 | R$ 13.999,00 |
| Nobreak cotado de 1.000 VA | 1 | R$ 2.207,70 |
| Impressora multifuncional laser de rede | 8 | R$ 2.929,50 |
| NAS com discos para backup | 1 | R$ 5.656,00 |
| Filtro de linha com proteção contra surtos | 54 | R$ 65,00 |
| Licença Windows Server Standard 16 núcleos | 2 | R$ 10.514,90 |
| CAL Windows Server por dispositivo | 54 | R$ 566,57 |

**Observações sobre o orçamento:**

- O kit de teclado e mouse para os ThinkCentre ainda está sem preço.
- O nobreak cotado é de 1.000 VA, enquanto o dimensionamento da planilha indica 600 VA.
- O preço do computador da equipe de TI e a referência do NAS estão sinalizados para conferência na planilha.
- As licenças CAL estão previstas por dispositivo, uma para cada computador.
- Os valores são cotações registrados na planilha, não uma garantia de preço atual.
- O total definitivo deverá ser conferido após validar os itens pendentes e as cotações.

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

A planilha de postos também calcula a quantidade projetada de computadores por setor com o crescimento previsto.

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

As configurações apresentadas representam o dimensionamento do projeto com base nos documentos do grupo. Os itens marcados como pendentes ou sujeitos a confirmação deverão ser validados antes da implantação.

## 12. Referência institucional

Site oficial da empresa Robertet:

https://www.robertet.com/

---

**Projeto acadêmico — Robertet Groupe**

*Redes de Computadores | Sistemas Operacionais | Arquitetura de Computadores | IoT*
