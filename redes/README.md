# Redes

Esta pasta reúne os materiais do planejamento da infraestrutura de redes da empresa Robertet Groupe. O projeto apresenta uma proposta de topologia, segmentação por VLANs, endereçamento IPv4, regras preliminares de acesso e dimensionamento inicial dos equipamentos.

## Arquivos

- [Topologia_Dimensionamento.pdf](Topologia_Dimensionamento.pdf): apresenta a topologia da rede, a distribuição dos equipamentos por pavimento e o dimensionamento inicial.
- [plano-de-redes-vlans-ipv4-acessos.xlsx](plano-de-redes-vlans-ipv4-acessos.xlsx): contém o planejamento das VLANs, o endereçamento IPv4 e a matriz preliminar de acessos.
- [planta_perfumaria_v2.drawio](planta_perfumaria_v2.drawio): contém a planta dos pavimentos da empresa e pode ser editado no [diagrams.net](https://app.diagrams.net/).

## Resumo da proposta

A rede foi planejada em topologia de estrela hierárquica, com conexão à internet passando pelo roteador/firewall, pelo switch principal (core) e pelos switches de acesso de cada pavimento. A proposta separa usuários, servidores, impressoras, dispositivos IoT, visitantes e gerenciamento de rede em VLANs distintas.

O acesso entre VLANs deve ser controlado por regras de firewall, liberando somente os serviços necessários para cada grupo. A rede de visitantes deve permitir acesso à internet sem acesso às redes internas.

## Observações

As quantidades de portas, pontos de rede, equipamentos e dispositivos são estimativas iniciais e devem ser confirmadas.

Antes da entrega final, conferir a descrição da VLAN 10 nos documentos: a planilha a identifica como rede de usuários de TI e reserva a VLAN 99 para gerenciamento; o PDF menciona administração dos equipamentos na descrição da VLAN 10. As descrições devem ficar consistentes entre os arquivos.
