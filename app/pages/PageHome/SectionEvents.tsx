import { SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import { CardEvent } from "~/components/CardEvent/CardEvent";
import { LogoEventbrite } from "~/components/Logos/LogoEventbrite";
import { LogoMeetup } from "~/components/Logos/LogoMeetup.tsx";
import { SectionIntroWithButtons } from "~/components/SectionIntro/SectionIntroWithButtons";
import { Wrapper, WrapperProps } from "~/components/Wrapper/Wrapper";

export interface SectionEventsProps extends Omit<WrapperProps, "children"> {}

export const SectionEvents: FC<SectionEventsProps> = ({
  maxWidth,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  background,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => {
  return (
    <Wrapper
      maxWidth={maxWidth}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      background={background}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <SectionIntroWithButtons
        title="Our Core Events"
        text="Our core events comprise of 2 monthly networking and coding events. We also are working on adding two hackathons a year."
        showText
        buttonOneText="Meetup"
        buttonOneLink="https://www.meetup.com/milwaukee-code-and-coffee/events/"
        buttonOneSlot={<LogoMeetup />}
        buttonTwoText="Eventbrite"
        buttonTwoLink=""
        buttonTwoSlot={<LogoEventbrite />}
      />
      <SimpleGrid
        columns={[3, null]}
        spacingX={9}
        spacingY={9}
        alignItems="stretch"
      >
        <CardEvent
          imageSrc="/assets/logos-events/event-code-and-coffee.png"
          heading="Code & Coffee"
          // description="Occurs on the first Saturday of every month. A Milwaukee coding meetup for any dev-curious, aspiring, or professional developer to work/hack on your project."
          description="Code and Coffee is a morning collaboration and networking event held on the first Saturday of each month."
          linkText="Learn More >"
          linkTo="/codeandcoffee"
        />
        <CardEvent
          imageSrc="/assets/logos-events/event-code-and-brews.png"
          heading="Code + Brews"
          description="Code and Brews has the same format as Code and Coffee, but at night with beer instead of coffee"
          linkText="Learn More >"
          linkTo="/codeandbrews"
        />
        <CardEvent
          imageSrc="/assets/logos-events/event-hackreation-big.png"
          heading="Hackreation"
          description="Our newest recurring event. Come to this event for focused hacking or working on person projects."
          linkText="Learn More >"
          linkTo="/hackreation"
        />
      </SimpleGrid>
    </Wrapper>
  );
};
