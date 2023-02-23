import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

/** components */
import Progressbar from '@/components/Progressbar';
import PODialog from '@/components/sprintIntro/introDialog/PODialog';
import MMDialog from '@/components/sprintIntro/introDialog/MMDialog';
import SprintPlanFigure from '@/components/sprintIntro/introDialog/SprintPlanFigure';
import PlanningTeamFigure from '@/components/sprintIntro/introDialog/PlanningTeamFigure';

/** utils */
import { TButtonSVGClickHandler } from '@/utils/types';

const delay = 1;
const duration = 1;

const SprintIntro = () => {
  const [dialogSeq, setDialogSeq] = useState(1);

  const showNextDialog = (e: TButtonSVGClickHandler) => {
    setDialogSeq((prev) => prev + 1);
  };

  return (
    <>
      <Head>
        <title>Scrum 短衝規劃介紹</title>
      </Head>
      <main
        className="h-screen relative overflow-hidden
        flex flex-col items-center"
      >
        <Progressbar value={40} />
        <div className="container py-10 flex flex-col h-full">
          <AnimatePresence>
            {dialogSeq === 1 && (
              <div>
                <PODialog
                  onClick={showNextDialog}
                  duration={duration}
                  delay={delay}
                />
                <SprintPlanFigure duration={duration} delay={delay + 0.3} />
              </div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {(dialogSeq === 2 || dialogSeq === 3) && (
              <div className="mt-auto pb-10">
                <PlanningTeamFigure duration={duration} delay={delay + 0.3} />
                <MMDialog
                  onClick={showNextDialog}
                  duration={duration}
                  delay={delay}
                />
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
};

export default SprintIntro;
