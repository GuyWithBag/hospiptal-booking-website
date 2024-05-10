import Background from "@/components/background";
import { Box, Section, Flex, Text, Card, Separator } from "@radix-ui/themes";


export default function Home() {
  return (
    <main>
      <Flex direction={'column'} align={'center'} justify={'center'}>
        <Box className="h-screen w-[100%]">
          <Background />
          {/* <Box className="dialog-position-absolute">
            <HomePageDropDown />
          </Box> */}
        </Box>

        <Section id="about-us" className="h-screen">
          <Separator my="3" size="4" />
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

              <Separator my="3" size="4" />
              <Text size={'5'} weight={'bold'} className="text-[var(--accent-11)]" as="p">Disclaimer:</Text>
              <Text weight={'medium'} as="p">• Please be aware that using our online booking system only reserves a time window for your clinic appointment in advance. We still need to prioritize controlling the number of people within the clinic, so there is no guarantee that you will be able to enter at the precise time that you have selected.  First come, first served policy applies to this clinic.</Text>
              <Text weight={'medium'} as="p">• Note that the arrival of the doctor is 11:00am</Text>
            </Flex>


          </Card>

        </Section>

        <Section id="laboratory" className="h-screen">
          <Text size={'7'} weight={'bold'} className="text-[var(--accent-9)]" >Laboratory opens @6:30AM (Monday to Saturday)</Text>
          <Separator my="3" size="4" />
          {/* <Text size={'5'} weight={'bold'} className="text-[var(--accent-11)]" >Laboratory Prices as of January 3, 2022 - January 2, 2023</Text> */}
          {/* <Separator my="3" size="4" /> */}

          <Flex direction={'column'}>
            <Flex direction={'row'} justify={'between'}>
              <Text>Blood typing:</Text>
              <Text>P80</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Complete Blood count with platelet:</Text>
              <Text>P220</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Lipid profile:</Text>
              <Text>P800</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Fecalysis:</Text>
              <Text>P80</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Urinalysis:</Text>
              <Text>P80</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Fasting Blood sugar:</Text>
              <Text>P150</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Random Blood sugar:</Text>
              <Text>P150</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Sodium, Potassium, Chloride, Calcium:</Text>
              <Text>P1200</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Sodium and Potassium:</Text>
              <Text>P900</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Calcium:</Text>
              <Text>P450</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Chloride:</Text>
              <Text>P450</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Lithium:</Text>
              <Text>P450</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>SGPT:</Text>
              <Text>P250</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>SGOT:</Text>
              <Text>P250</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>HBA1C:</Text>
              <Text>P900</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Serum Uric Acid:</Text>
              <Text>P200</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Creatinine:</Text>
              <Text>P900</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Anti-Having Igm:</Text>
              <Text>P180</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>HBsAg:</Text>
              <Text>P150</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>VDRL:</Text>
              <Text>P300</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>TSH, T3, Free T4:</Text>
              <Text>P2000</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>PSA:</Text>
              <Text>P1000</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>Helicobacter pylori test:</Text>
              <Text>P900</Text>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
              <Text>BUN:</Text>
              <Text>P200</Text>
            </Flex>
          </Flex>


        </Section>
        <Separator my="3" size="4" />
        <Section id="contacts" className="">
          <Flex align={'center'} justify={'center'} direction={'column'} className="w-[100%]">
            <Text size={'7'} weight={'bold'} className="text-[var(--accent-11)]" as="p">Contact Us Here:</Text>
            <Text weight={'medium'} as="p">Email: guinmapangnerimedicalclinic@gmail.com</Text>
            <Text weight={'medium'} as="p">Phone number: 0950 030 3794</Text>
          </Flex>
        </Section>
        <Separator my="3" size="4" />
        <Section id="contacts" className="">
          <Flex align={'center'} justify={'start'} direction={'column'} className="w-[100%]">
            <Text className="" as="p">©Guinmapang-Neri Medical Clinic 2024</Text>
          </Flex>
        </Section>
        <Separator my="3" size="4" />
      </Flex>
    </main>
  )
}