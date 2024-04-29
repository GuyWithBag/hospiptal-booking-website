import Background from "@/components/background";
import HomePageDropDown from "@/components/home-page-dropdown";
import { Box, Section, Flex, Text, Card } from "@radix-ui/themes";

// TODO: FUCK ISAJDIOSJODISAIHDUAISHDISADIHIUH LEARN GRID!!!

export default function Home() {
  return (
    <main>
      <Flex direction={'column'} align={'center'} justify={'center'}>
        <Box className="h-screen w-[100%]">
          <Background />
          <Box className="dialog-position-absolute">
            <HomePageDropDown />
          </Box>
        </Box>

        <Section id="about-us" className="h-screen">
          <Card>
            <Flex align={'center'} justify={'center'} direction={'column'} className=" px-[20%]">
              <Text size={'8'} weight={'bold'} className="text-[var(--accent-9)]">About Us</Text>
              <br />
              <Text size={'7'} weight={'bold'} className="text-[var(--accent-9)]">Mission</Text>
              <Text as={'p'} size={'4'} align={'center'}>
                Guinmapang Medical Clinic and Laboratory is committed to quality comprehensive and cost-effective healthcare laboratory services through highest standards that ensure total customer satisfaction.
              </Text>
              <br />
              <Text size={'7'} weight={'bold'} className="text-[var(--accent-9)]">Vision</Text>
              <Text as={'p'} size={'4'} align={'center'} >
                On our pursuit to become the leading house in the diagnostic industry, and to provide accurate, reliable and affordable complete diagnostic tests and other medical services.
              </Text>
              <br />
              <Text size={'7'} weight={'bold'} className="text-[var(--accent-9)]">Objectives</Text>
              <br />
              <ul>
                <li>
                  <Text>
                    - To assists physicians in diagnosing diseases by providing accurate, precise and reliable laboratory results and promptness of a lucid report.
                  </Text>
                </li>
                <li>
                  <Text>
                    - To promote ethical practices, implement quality assurance programs and waste management disposal.
                  </Text>
                </li>
              </ul>
            </Flex>

          </Card>

        </Section>
      </Flex>
    </main>
  )
}