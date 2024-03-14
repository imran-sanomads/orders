import { Page, Layout, Text,  Button} from "@shopify/polaris"
import useSyncProducts from "../hooks/syncingproducts";
export default function HomePage() {
  const { handleSyncProducts } = useSyncProducts();
  return (
    <Page narrowWidth>
      <Layout>
        <Layout.Section>
          <Text as="h2" variant="headingMd">
            Welcome To My App
          </Text>
          <p> 
            Thank you for using my app. Enjoy your experience!
          </p>
          <Button onClick={handleSyncProducts}>Sync Products</Button>
        </Layout.Section>
      </Layout>
    </Page>
  );
}