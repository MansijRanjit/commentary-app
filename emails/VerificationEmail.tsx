import * as React from 'react';
import { Html, Head, Preview, Row, Section, Heading, Text } from "@react-email/components";

interface VerificationEmailProps {
    username:string;
    otp:string;
}

export default function VerificationEmail(props:VerificationEmailProps) {
  const { username,otp } = props;

  return (
    <Html lang="en">
        <Head>
            <title>Verification Code</title>
        </Head>
        <Preview>Here is your verification code: {otp}</Preview>
        <Section>
            <Row>
                <Heading as='h1'>Hello {username}</Heading>
            </Row>
            <Row>
                <Text>
                    Thank you for registering.Please use the following verification code to complete the registration.
                </Text>
            </Row>
            <Row>
                <Text>
                    If you did not request the code, Please ignore this email.
                </Text>
            </Row>
        </Section>
    </Html>
  );
}
