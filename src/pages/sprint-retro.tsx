import Head from 'next/head';
import { useRouter } from 'next/router';

/** components */
import GGDialog from '@/components/sprintRetro/retroDialog/GGDialog';
import Main from '@/components/common/Main';
import Progressbar from '@/components/common/Progressbar';
import Container from '@/components/common/Container';
import RetroQuiz from '@/components/sprintRetro/retroQuiz/RetroQuiz';
import NextPageForeground from '@/components/common/NextPageForeground';

/** utils */
import useFrame from '@/hooks/useFrame';

const SprintRetro = () => {
  const router = useRouter();
  const { showFrame1, showFrame2, showFrame3, showNextFrame } = useFrame(1);

  const redirectToEndPage = () => {
    router.push('end');
  };

  return (
    <>
      <Head>
        <title>Scrum 短衝規劃介紹</title>
      </Head>
      <Main>
        <NextPageForeground visible={showFrame3} onClick={redirectToEndPage} />
        <Progressbar value={showFrame3 ? 100 : 85} />
        <Container>
          <GGDialog
            showGGDialog1={showFrame1}
            showGGDialog2={showFrame2}
            showGGDialog3={showFrame3}
            onClick={showNextFrame}
          />
          <RetroQuiz
            visible={showFrame2 || showFrame3}
            showNextFrame={showNextFrame}
            disabled={showFrame3}
            showReadyButton={showFrame2}
            className='2xl:mt-14'
          />
        </Container>
      </Main>
    </>
  );
};

export default SprintRetro;
