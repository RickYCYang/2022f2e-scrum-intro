import Head from 'next/head';
import { useRouter } from 'next/router';

/** components */
import Progressbar from '@/components/common/Progressbar';
import SprintPlanFigure1 from '@/components/sprintBacklog/figures/SprintPlanFigure1';
import SprintPlanFigure2 from '@/components/sprintBacklog/figures/SprintPlanFigure2';
import PlanningTeamFigure from '@/components/sprintBacklog/figures/PlanningTeamFigure';
import PODialog from '@/components/sprintBacklog/introDialog/PODialog';
import MMDialog from '@/components/sprintBacklog/introDialog/MMDialog';
import EEGGDialog from '@/components/sprintBacklog/introDialog/EEGGDialog';
import StoryPointFigure from '@/components/sprintBacklog/figures/StoryPointFigure';
import BacklogDnDPanel from '@/components/sprintBacklog/backlogDnDPanel/BacklogDnDPanel';
import Main from '@/components/common/Main';
import Container from '@/components/common/Container';
import NextPageForeground from '@/components/common/NextPageForeground';

/** utils */
import useFrame from '@/hooks/useFrame';

const delay = 1;
const duration = 1;

const SprintIntro = () => {
  const router = useRouter();
  const {
    showFrame1,
    showFrame2,
    showFrame3,
    showFrame4,
    showFrame5,
    showFrame6,
    showFrame7,
    showFrame8,
    showNextFrame,
  } = useFrame(1);

  const redirectToSprintIntro = () => router.push('sprint-intro');

  return (
    <>
      <Head>
        <title>Scrum 短衝待辦清單</title>
      </Head>
      <Main>
        <NextPageForeground
          visible={showFrame8}
          onClick={redirectToSprintIntro}
        />
        <Progressbar value={40} />
        <Container className="h-full">
          <>
            {/** PO's Dialog */}
            <PODialog
              visible={showFrame1}
              onClick={showNextFrame}
              duration={duration}
              delay={delay}
            />
            <SprintPlanFigure1
              duration={duration}
              delay={1.6}
              visible={showFrame1}
            />
          </>
          <>
            {/** EE & GG's Dialog */}
            <EEGGDialog
              duration={duration}
              showEERole={showFrame3 || showFrame4 || showFrame5}
              showGGRole={
                showFrame3 ||
                showFrame4 ||
                showFrame5 ||
                showFrame6 ||
                showFrame7 ||
                showFrame8
              }
              onClick={showNextFrame}
              showEEDialog={showFrame4 || showFrame5}
              showEEDialog1={showFrame4}
              showEEDialog2={showFrame5}
              showGGDialog={showFrame6 || showFrame7 || showFrame8}
              showGGDialog1={showFrame6}
              showGGDialog2={showFrame7}
              showGGDialog3={showFrame8}
            />
            <StoryPointFigure
              visible={showFrame4 || showFrame5}
              showTransitionImgs={showFrame5}
              duration={0.2}
              delay={1}
            />
            <BacklogDnDPanel
              visible={showFrame7 || showFrame8}
              showNextFrame={showNextFrame}
            />
          </>
          <>
            {/** MM's Dialog */}
            <PlanningTeamFigure
              duration={duration}
              delay={delay + 0.3}
              visible={showFrame2}
            />
            <SprintPlanFigure2
              duration={duration}
              delay={1}
              visible={showFrame3}
            />
            <MMDialog
              duration={duration}
              delay={delay}
              visible={showFrame2 || showFrame3}
              onClick={showNextFrame}
              showMMDialog1={showFrame2}
              showMMDialog2={showFrame3}
            />
          </>
        </Container>
      </Main>
    </>
  );
};

export default SprintIntro;
