import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import {
  Authenticator,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  View,
  useTheme,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";

Amplify.configure(awsExports);

const FileUpload = () => {
  return (
    <StorageManager
      acceptedFileTypes={["*"]}
      accessLevel="public"
      maxFileCount={100}
      autoUpload={false}
      isResumable
    />
  );
};

const App = () => {
  return (
    <View width="100%">
      <Authenticator
        components={{
          Header() {
            const { tokens } = useTheme();
            return <View textAlign="center" padding={tokens.space.xl} />;
          },
          SignIn: {
            Header() {
              const { tokens } = useTheme();
              return (
                <Heading
                  margin={`${tokens.space.xl} 0 0`}
                  padding={`${tokens.space.medium} 0 0 ${tokens.space.xl}`}
                  level={4}
                >
                  Sign in to your account
                </Heading>
              );
            },
          },
        }}
        hideSignUp={true}
      >
        {({ signOut, user }) => (
          <>
            <View
              backgroundColor="#232f3d"
              fontSize={14}
              padding="10px"
              position="absolute"
              top={0}
              width="100%"
            >
              <View style={{ float: "right" }}>
                <Flex direction="row">
                  <Text
                    color="#FFF"
                    fontWeight="bold"
                    opacity={0.5}
                    margin="auto .6rem"
                  >
                    {user?.username}
                  </Text>
                  <Divider orientation="vertical" size="small" />
                  <Button
                    color="#FFF"
                    size="small"
                    variation="link"
                    colorTheme="overlay"
                    onClick={signOut}
                  >
                    Sign out
                  </Button>
                </Flex>
              </View>
            </View>
            <View paddingTop={120} width="90%" margin="0 auto">
              <FileUpload />
            </View>
          </>
        )}
      </Authenticator>
    </View>
  );
};

export default App;
