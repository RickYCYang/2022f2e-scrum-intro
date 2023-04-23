import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

/** components */
import Main from '@/components/common/Main';
import Progressbar from '@/components/common/Progressbar';
import EEDialog from '@/components/sprintIntro/introDialog/EEDialog';
import Container from '@/components/common/Container';
import ScrumMeetingPanel from '@/components/sprintIntro/scrumMeetingPanel/ScrumMeetingPanel';
import SprintDnDPanel from '@/components/sprintIntro/sprintDnDPanel/SprintDnDPanel';
import NextPageForeground from '@/components/common/NextPageForeground';

/** utils */
import useFrame from '@/hooks/useFrame';

const SprintIntro = () => {
  const router = useRouter();
  const { showFrame1, showFrame2, showFrame3, showFrame4, showNextFrame } =
    useFrame(1);

  const redirectToSprintRetro = () => {
    router.push('sprint-retro');
  };

  return (
    <>
      <Head>
        <title>Scrum 短衝規劃介紹</title>
      </Head>
      <Main>
        <NextPageForeground
          visible={showFrame4}
          onClick={redirectToSprintRetro}
        />
        <Progressbar value={70} />
        <Container>
          <EEDialog
            showEEDialog1={showFrame1}
            showEEDialog2={showFrame2}
            showEEDialog3={showFrame3}
            showEEDialog4={showFrame4}
            visible={true}
            onClick={showNextFrame}
          />
          <ScrumMeetingPanel
            visible={showFrame2}
            showNextFrame={showNextFrame}
          />
          <SprintDnDPanel
            visible={showFrame3 || showFrame4}
            showNextFrame={showNextFrame}
          />
        </Container>
      </Main>
    </>
  );
};

export default SprintIntro;
