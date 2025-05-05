import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Policy() {
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
        <Text style={styles.title}>POLÍTICA DE PRIVACIDADE</Text>

        <Text style={styles.paragraph}>
          Seus dados serão processados em total respeito aos seus direitos e privacidade e de acordo com as
          leis e regulamentações aplicáveis, notadamente a Lei no 5/2019 de Proteção de Dados em
          Moçambique. Os seus dados pessoais serão processados em formato digital e em papel. Ao acessar
          este Aplicativo, você aceita os termos deste Contrato. Processaremos, com o seu consentimento,
          os seguintes dados:
          Dados de registo inicial: ao se cadastrar, registamos e armazenamos seus dados pessoais
          (endereço de e-mail, código postal de sua residência e local de trabalho, dados demográficos, dados
          sobre seu estilo de vida, composição familiar e condições de saúde anteriores, etc.).
          Respostas às perguntas: Periodicamente, convidamos você a preencher uma pesquisa para obter
          informações sobre sua saúde.
          Dados de registo: quando você se conecta ao nosso sistema, isso regista automaticamente as
          informações que o seu dispositivo móvel nos envia. Essas informações podem estar relacionadas
          às operações realizadas por você, o endereço IP e o endereço MAC do qual você está se
          conectando, a data e a hora de sua conexão, etc.
          Comunicações: quando você nos envia um e-mail ou outra comunicação, nós registamos e
          armazenamos essa comunicação.
          Seus dados pessoais serão processados com as seguintes finalidades:
          • Realizar pesquisas científicas e análises estatísticas sobre a propagação da doença em
          Moçambique;
          • Publicar análises estatísticas, representações gráficas dos resultados (somente com dados
          agregados e anónimos);
          • Fornecer informações personalizadas sobre os resultados da pesquisa (quantos usuários
          registados na sua área tem gripe, etc.);
          • Proteger o funcionamento técnico dos nossos sistemas informáticos.
          Seus dados podem ser reaproveitados, mas apenas de forma anónima e agregada, para pesquisa
          científica, atividades de análise estatística ou estratégias aprimoradas de preparação para doenças.
          O fornecimento dos dados é voluntário. Nós (Universidade Eduardo Mondlane e Faculdade de
          Medicina) processamos os seus dados respeitando os mais elevados princípios de protecção de
          dados e privacidade. Se você tiver alguma dúvida, pode nos contatar enviando um e-mail para
          UEMSaude@gmail.com.
          Lembramos que a lei protege seu direito de acessar, atualizar, corrigir e contestar o processamento
          de seus dados. Esses direitos incluem, mas não estão limitados ao direito de obter a confirmação
          da existência ou não de dados relativos a você e de ser informado deles de forma inteligível,
          informações sobre a fonte dos dados, os objetivos e métodos de processamento, a atualização, a
          correção ou integração dos seus dados, o desaparecimento, a transformação em anonimato ou o
          bloqueio dos dados pessoais tratados ilegalmente e o direito de se opor, total ou parcialmente, à
          sua utilização.
          Sem prejuízo do anterior, salvo nos casos em que a lei autorize o tratamento dos dados pessoais
          sem o aval do interessado (por exemplo, para cumprir os deveres previstos na lei ou para dar
          cumprimento a ordens de autoridades públicas, incluindo autoridades judiciais) não utilizaremos
          os seus dados pessoais para outros fins que não os acima mencionados.
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