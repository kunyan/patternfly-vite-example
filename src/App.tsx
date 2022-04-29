import { useState } from "react";
import {
  Page,
  PageSection,
} from "@patternfly/react-core/dist/esm/components/Page";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Page>
      <PageSection>Hello Patternfly and Vite</PageSection>
    </Page>
  );
}

export default App;
