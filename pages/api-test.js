import Layout from '../components/MyLayout.js'
import Alert from '../components/Alert.js'

export default () => (
  <Layout>
    <p>This alert does not work becasue of the api name conflict.</p>
    <Alert />
  </Layout>
)
