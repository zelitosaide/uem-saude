import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TermsAndConditions() {
  return (
    <View style={styles.container}>
      <View style={styles.backLink}>
        <Link 
          style={styles.backLinkText}
          href={"/sign-up"}
          replace={true}
        >
          Voltar
        </Link>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Termos e Serviço</Text>

        <Text style={styles.sectionTitle}>1. Introdução</Text>
        <Text style={styles.paragraph}>
          Bem-vindo a Vigilância Participativa Digital de Saúde em Moçambique.
          Como você acabou de clicar em nossos Termos de Serviço, faça uma pausa, e leia atentamente as páginas a seguir. Isso levará aproximadamente 20 minutos.
          Estes Termos de Serviço ("Termos", "Termos de Serviço") regem o uso de nosso aplicativo móvel (VPD) (o "Serviço") operado pela Universidade Eduardo Mondlane ("Empresas") em nome da Faculdade de Medicina da Universidade Eduardo Mondlane, Ministério da Saúde e Instituto Nacional de Saúde todas instituições de Moçambique. 
          Nossa Política de Privacidade também rege o uso de nosso Serviço e explica como recolhemos,
          protegemos e divulgamos informações que resultam do uso de nossas páginas da web. Leia aqui 
          O seu contrato connosco inclui estes Termos e nossa Política de Privacidade (“Contratos”). Você reconhece que leu e compreendeu os Contratos e concorda em se comprometer com eles. Se você não concordar (ou não puder cumprir) o Contrato, não poderá usar o Serviço, mas informe-nos enviando um e-mail para ou   para que possamos tentar encontrar uma solução. Estes Termos se aplicam a todos os visitantes, usuários e outras pessoas que desejam acessar ou usar o Serviço.

          Obrigado por ser responsável.
        </Text>

        <Text style={styles.sectionTitle}>2. Comunicações</Text>
        <Text style={styles.paragraph}>
          Ao criar uma conta em nosso serviço, você concorda em receber lembretes para preencher suas pesquisas periódicas e outras informações relevantes que possamos enviar. No entanto, você pode optar por não receber qualquer uma ou todas essas comunicações de nós, seguindo o link de cancelamento de inscrição ou enviando um e-mail para UEMSaude@gmail.com 
        </Text>

        <Text style={styles.sectionTitle}>3. Conteúdo</Text>
        <Text style={styles.paragraph}>
          Você é responsável pelo conteúdo que responde por meio de nossas pesquisas. Ao responder às nossas pesquisas, você declara e garante que: (i) o conteúdo é seu (você o possui) e / ou você tem o direito de usá-lo e o direito de nos conceder os direitos e a licença previstos nestes Termos, e (ii) que a publicação do seu Conteúdo no ou através do Serviço não viola os direitos de privacidade, direitos de publicidade, direitos autorais, direitos contratuais ou quaisquer outros direitos de qualquer pessoa ou entidade. Nós nos reservamos o direito de encerrar a conta de qualquer pessoa que esteja infringindo direitos autorais incluindo aquelas de menor de 18 anos.
          Você retém todo e qualquer direito a qualquer Conteúdo que enviar, postar ou exibir no ou por meio do Serviço e é responsável por proteger esses direitos. Não assumimos qualquer responsabilidade e não assumiremos qualquer responsabilidade pelo Conteúdo que você ou quaisquer publicações de terceiros no ou através do Serviço. No entanto, ao postar Conteúdo usando o Serviço, você nos concede o direito e a licença para usar, analisar e distribuir tal Conteúdo de forma anônima e agregada no e através do Serviço.
        </Text>

        <Text style={styles.sectionTitle}>4. Uso Proibido </Text>
        <Text style={styles.paragraph}>
          Você pode usar o Serviço apenas para fins legais e de acordo com os Termos. Você concorda em não usar o Serviço: (a) De qualquer forma que viole qualquer lei ou regulamento nacional ou internacional aplicável; (b) Com a finalidade de explorar, prejudicar ou tentar explorar ou prejudicar menores de qualquer forma, expondo-os a conteúdo impróprio ou de outra forma; (c) Para transmitir ou obter o envio de qualquer material publicitário ou promocional, incluindo qualquer “lixo eletrônico”, “corrente de correspondência”, “spam” ou qualquer outra solicitação semelhante; (d) Para se passar por ou tentar se passar por Universidade Eduardo Mondlane, outro usuário, ou qualquer outra pessoa ou entidade; (e) De qualquer forma que infrinja os direitos de terceiros, ou seja de qualquer forma ilegal, ameaçadora, fraudulenta ou prejudicial, ou em conexão com qualquer propósito ou atividade ilegal, ilegal, fraudulenta ou prejudicial; (f) Para se envolver em qualquer outra conduta que restrinja ou iniba o uso ou gozo do Serviço de alguém, ou que, conforme determinado por nós, possa prejudicar ou ofender a Universidade Eduardo Mondlane ou usuários do Serviço ou expô-los a responsabilidades.
          Além disso, você concorda em não: (a) Usar o Serviço de qualquer maneira que possa desabilitar, sobrecarregar, danificar ou prejudicar o Serviço ou interferir no uso do Serviço por qualquer outra parte, incluindo sua capacidade de se envolver em atividades em tempo real através do Serviço (b) Usar qualquer robô, “spider” ou outro dispositivo, processo ou meio automático para acessar o Serviço para qualquer finalidade, incluindo monitoramento ou cópia de qualquer material no Serviço; (c) Usar qualquer processo manual para monitorar ou copiar qualquer material no Serviço ou para qualquer outro propósito não autorizado sem nosso consentimento prévio por escrito; (d) Usar qualquer dispositivo, software ou rotina que interfira com o funcionamento adequado do Serviço; (e) Introduzir quaisquer vírus, cavalos de troia, “worms”, bombas lógicas ou outro material que seja malicioso ou tecnologicamente prejudicial; (f) Tentar obter acesso não autorizado, interferir, danificar ou interromper qualquer parte do Serviço, o servidor no qual o Serviço está armazenado ou qualquer servidor, computador ou banco de dados conectado ao Serviço; (g) Serviço de ataque através de um ataque de negação de serviço ou um ataque distribuído de negação de serviço; (h) Tomar qualquer ação que possa danificar ou falsificar a classificação da Universidade Eduardo Mondlane; (i) Caso contrário, tente interferir com o funcionamento adequado do Serviço
        </Text>

        <Text style={styles.sectionTitle}>5. Não Uso por Menores </Text>
        <Text style={styles.paragraph}>
          O serviço é destinado apenas para acesso e uso por indivíduos com pelo menos dezoito (18) anos de idade. Ao acessar ou usar VPD em Saúde, você garante e declara que tem pelo menos dezoito (18) anos de idade e com plena autoridade, direito e capacidade para celebrar este contrato e cumprir todos os termos e condições dos Termos. Se você não tiver pelo menos dezoito (18) anos de idade, está proibido de acessar e usar o Serviço.  
        </Text>

        <Text style={styles.sectionTitle}>6. Contas</Text>
        <Text style={styles.paragraph}>
          Ao criar uma conta connosco, você garante que tem mais de 18 anos e que as informações que nos fornece são precisas, completas e sempre atualizadas. Informações imprecisas, incompletas ou obsoletas podem resultar no encerramento imediato de sua conta no Serviço.
          Você é responsável por manter a confidencialidade de sua conta e senha, incluindo, mas não se limitando à restrição de acesso ao seu computador e/ou conta. Você concorda em aceitar a responsabilidade por todas e quaisquer atividades ou ações que ocorram em sua conta e/ou senha, seja sua senha com nosso Serviço ou um serviço de terceiros. Você deve nos notificar imediatamente ao tomar conhecimento de qualquer violação de segurança ou uso não autorizado de sua conta.
          Você não pode usar como nome de usuário o nome de outra pessoa ou entidade ou que não esteja legalmente disponível para uso, um nome ou marca comercial que esteja sujeito a quaisquer direitos de outra pessoa ou entidade que não seja você, sem a autorização apropriada. Você não pode usar como nome de usuário qualquer nome que seja ofensivo, vulgar ou obsceno. 
          Nós nos reservamos o direito de recusar serviço, encerrar contas, remover ou editar conteúdo ou cancelar pedidos a nosso exclusivo critério.
          Você reconhece e concorda que a Universidade Eduardo Mondlane e Faculdade de Medicina não serão responsáveis, direta ou indiretamente, por quaisquer danos ou perdas causados ou alegadamente causados por ou em conexão com o uso ou confiança em qualquer conteúdo, bens ou serviços disponíveis em ou por meio de tais sites ou serviços de terceiros. Aconselhamos vivamente que leia os Termos de Serviço e as Políticas de Privacidade de quaisquer sites ou serviços de terceiros que visite.
        </Text>
        
        <Text style={styles.sectionTitle}>7. Garantia de Isenção de responsabilidade</Text>
        <Text style={styles.paragraph}>
          Estes Serviços são fornecidos pela Faculdade de Medicina da UEM na base “tal como está” e “conforme disponível”. Ambas as empresas não fazem representações ou garantias de qualquer tipo, expressa ou implícita, quanto à operação de seus serviços, ou as informações, conteúdo ou materiais neles incluídos. você concorda expressamente que o uso desses serviços, seu conteúdo e quaisquer serviços ou itens obtidos de nós é por sua conta e risco. Nem as empresas, nem qualquer pessoa associada a elas oferece qualquer garantia ou representação com relação à integridade, segurança, confiabilidade, qualidade, precisão ou disponibilidade dos serviços. Sem limitar o precedente, nem a empresa nem qualquer pessoa associada à empresa representa ou garante que os serviços, seu conteúdo ou quaisquer serviços ou itens obtidos através dos serviços serão precisos, confiáveis, livres de erros ou ininterruptos, que os defeitos serão corrigidos, que os serviços ou o servidor que os disponibiliza estão livres de vírus ou outros componentes prejudiciais ou que os serviços ou quaisquer serviços ou itens obtidos por meio dos serviços atenderão às suas necessidades ou expectativas. A empresa por meio deste se isenta de todas as garantias de qualquer tipo, sejam expressas ou implícitas, estatutárias ou de outra forma, incluindo, mas não se limitando a, quaisquer garantias de comercialização, não violação e adequação a um propósito específico.
          O precedente não afeta quaisquer garantias que não possam ser excluídas ou limitadas pela lei aplicável.  
        </Text>

        <Text style={styles.sectionTitle}>8. Limitação da responsabilidade</Text>
        <Text style={styles.paragraph}>
          Excepto quando proibido por lei, você nos isentará de quaisquer danos indiretos, punitivos, especiais, incidentais ou consequenciais, de qualquer forma (incluindo honorários advocatórios e todos os custos e despesas relacionados de litígio e arbitragem, ou em julgamento ou apelação, se houver, seja ou não litígio ou arbitragem instituído), seja em uma ação contratual, negligência ou outra ação ilícita, ou decorrente de ou em conexão com este contrato, incluindo, sem limitação, qualquer reclamação por danos pessoais ou materiais, decorrentes deste contrato e qualquer violação por você de quaisquer leis, estatutos, regras ou regulamentos federais, estaduais ou locais, mesmo que a empresa tenha sido previamente informada da possibilidade de tais danos. Exceto quando proibido por lei, se houver responsabilidade apurada por parte das empresas, esta será limitada ao valor pago pelos produtos e / ou serviços, e em nenhuma hipótese haverá danos consequenciais ou punitivos.  
        </Text>

        <Text style={styles.sectionTitle}>9. Término de Conta</Text>
        <Text style={styles.paragraph}>
          Podemos encerrar ou suspender sua conta e barrar o acesso ao Serviço imediatamente, sem aviso prévio ou responsabilidade, sob nosso exclusivo critério, por qualquer motivo e sem limitação, incluindo, mas não se limitando a uma violação dos Termos. Se você deseja encerrar sua conta, você pode simplesmente interromper o uso do Serviço. Todas as cláusulas dos Termos que, por sua natureza, devem sobreviver à rescisão, sobreviverão à rescisão, incluindo, sem limitação, cláusulas de propriedade, isenções de garantia, indenização e limitações de responsabilidade.
        </Text>

        <Text style={styles.sectionTitle}>10. Lei aplicável</Text>
        <Text style={styles.paragraph}>
          Estes termos serão regidos e interpretados de acordo com as leis de Moçambique, sem levar em conta seu conflito de provisões legais.
          Nossa falha em fazer valer qualquer direito ou disposição destes Termos não será considerada uma renúncia desses direitos. Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal, as disposições restantes destes Termos permanecerão em vigor. Estes Termos constituem o acordo completo entre nós em relação ao nosso Serviço e substituem quaisquer acordos anteriores que possamos ter entre nós em relação ao Serviço.
        </Text>

        <Text style={styles.sectionTitle}>11.	Mudanças no serviço</Text>
        <Text style={styles.paragraph}>
          Nós nos reservamos o direito de retirar ou alterar nosso Serviço e qualquer serviço ou material que fornecemos por meio do Serviço, a nosso exclusivo critério, mediante notificação. Não seremos responsáveis se, por qualquer motivo, todo ou parte do Serviço estiver indisponível a qualquer momento ou por qualquer período.
        </Text>

        <Text style={styles.sectionTitle}>12.	Emendas aos Termos</Text>
        <Text style={styles.paragraph}>
          Podemos alterar os Termos a qualquer momento, publicando os termos alterados neste site. Iremos comunicar essas mudanças com você. Seu uso continuado da Plataforma após a publicação dos Termos revisados significa que você aceita e concorda com as alterações. Ao continuar a acessar ou usar nosso Serviço após as revisões entrarem em vigor, você concorda em obedecer aos termos revistos. Se não concordar com os novos termos, você não está mais autorizado a usar o Serviço. Faremos o possível para cumprir os princípios de co-criação, buscando suas contribuições em quaisquer mudanças futuras.
        </Text>
        

        <Text style={styles.sectionTitle}>13.	Renúncia e divisibilidade</Text>
        <Text style={styles.paragraph}>
          Nenhuma renúncia pela Universidade Eduardo Mondlane de qualquer termo ou condição estabelecido nos Termos será considerada uma renúncia adicional ou contínua de tal Termo ou condição ou uma renúncia de qualquer outro termo ou condição, e qualquer falha da Universidade Eduardo Mondlane para afirmar um direito ou disposição sob os Termos não deve constituir uma renúncia de tal direito ou disposição.
          Se qualquer cláusula dos Termos for considerada por um tribunal ou outro tribunal de jurisdição competente como inválida, ilegal ou inexequível por qualquer motivo, tal cláusula deverá ser eliminada ou limitada ao mínimo, de modo que as cláusulas restantes dos Termos continuarão em pleno vigor e efeito.
        </Text>

        <Text style={styles.sectionTitle}>14.	Reconhecimento</Text>
        <Text style={styles.paragraph}>
          Ao usar o serviço ou outros serviços fornecidos por nós, você reconhece que leu estes Termos de Serviço e concorda em obedecer a eles.
        </Text>

        <Text style={styles.sectionTitle}>15.	Contactos</Text>
        <Text style={styles.paragraph}>
          Envie seus comentários, comentários, solicitações de suporte técnico para: UEMSaude@gmail.com 
        </Text>

        
        

        
        
        
        
        
        
        
        <Text style={styles.footer}>
          Última atualização: 1 de 30 de Maio de 2023
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 180, // Increased top padding to ensure visibility
  },
  backLink: {
    position: 'absolute', // Keep the button fixed at the top
    top: 0, // Adjust top position
    left: 0, // Adjust left position
    zIndex: 20, // Ensure it stays on top of other content
    backgroundColor: "white",
    height: 160,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    elevation: 1, 
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  backLinkText: {
    fontSize: 16,
    color: 'white', // Link color
    borderRadius: 8,
    padding: 14,
    backgroundColor: "#008800",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    fontWeight: "600",
    textAlign: "center",
    width: "100%"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: '#333',
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
  },
});