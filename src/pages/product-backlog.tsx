import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

/** components */
import Progressbar from '@/components/common/Progressbar';
import BacklogDialog from '@/components/productBacklog/backlogDialog/BacklogDialog';
import Button from '@/components/common/Button';
import BacklogDnDPanel from '@/components/productBacklog/backlogDnDPanel/BacklogDnDPanel';
import Main from '@/components/common/Main';
import Container from '@/components/common/Container';
import NextPageForeground from '@/components/common/NextPageForeground';

/** utils */
import useFrame from '@/hooks/useFrame';

const ProductBacklog = () => {
  const router = useRouter();
  const {
    showNextFrame,
    showFrame1,
    showFrame2,
    showFrame3,
    showFrame4,
    showFrame5,
  } = useFrame(1);

  const redirectToSprintBacklog = () => {
    router.push('/sprint-backlog');
  };

  return (
    <>
      <Head>
        <title>Scrum 產品待辦清單</title>
      </Head>
      <Main>
        <NextPageForeground
          visible={showFrame5}
          onClick={redirectToSprintBacklog}
        />
        <Progressbar value={20} />
        <Container>
          <BacklogDialog
            onClick={showNextFrame}
            showFrame1={showFrame1}
            showFrame2={showFrame2}
            showFrame3={showFrame3}
            showFrame4={showFrame4}
            showFrame5={showFrame5}
          />
          <div className="relative text-center 2xl:mt-14">
            {showFrame2 ? (
              <Button
                label="準備好了"
                onClick={showNextFrame}
                className="mt-20"
                duration={1}
                delay={0.8}
              />
            ) : null}
            <BacklogDnDPanel
              showExample={showFrame3}
              canDrag={showFrame4}
              showNextFrame={showNextFrame}
              visible={showFrame3 || showFrame4 || showFrame5}
            />
          </div>
        </Container>
      </Main>
    </>
  );
};

export default ProductBacklog;
