import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

/** components */
import Progressbar from '@/components/Progressbar';
import BacklogDialog from '@/components/productBacklog/backlogDialog/BacklogDialog';
import Button from '@/components/Button';
import BacklogDnDPanel from '@/components/productBacklog/backlogDnDPanel/BacklogDnDPanel';

/** utils */
import { backlogDialogs, INTRO_2, EXAMPLE, EXEC, PASS } from '@/utils/const';
import { TButtonSVGClickHandler } from '@/utils/types';

const ProductBacklog = () => {
  const router = useRouter();
  const [contentSeq, setContentSeq] = useState<number>(0);
  const [pass, setPass] = useState<boolean>(false);
  const showStartButton = backlogDialogs[contentSeq] === INTRO_2;
  const showBacklogPanel = [EXAMPLE, EXEC, PASS].includes(
    backlogDialogs[contentSeq]
  );
  const canDrag = backlogDialogs[contentSeq] === EXEC;
  const showCompeleteButton = canDrag;

  const showNextContent = (_e: TButtonSVGClickHandler) => {
    setContentSeq((prev) => prev + 1);
  };

  const redirectToSprintIntro = useCallback(
    () => router.push('sprint-intro'),
    [router]
  );

  useEffect(() => {
    if (pass && backlogDialogs[contentSeq] === PASS) {
      document.addEventListener('click', redirectToSprintIntro);
    }
    return () => {
      document.removeEventListener('click', redirectToSprintIntro);
    };
  }, [pass, contentSeq, redirectToSprintIntro]);

  return (
    <>
      <Head>
        <title>Scrum 產品待辦清單</title>
      </Head>
      <main
        className="h-screen relative overflow-hidden
        flex flex-col items-center"
      >
        <Progressbar value={20} />
        <div className="container py-10 flex flex-col">
          <BacklogDialog
            content={backlogDialogs[contentSeq]}
            showNextContent={showNextContent}
          />
          <div className="h-full w-full text-center relative">
            {showStartButton ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Button
                  label="準備好了"
                  onClick={showNextContent}
                  className="inline-block"
                />
              </motion.div>
            ) : null}
            {showBacklogPanel ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <BacklogDnDPanel canDrag={canDrag} setPass={setPass} />
              </motion.div>
            ) : null}
            {showCompeleteButton ? (
              <Button
                label="我完成了"
                className="absolute bottom-0 right-0"
                onClick={showNextContent}
                disabled={!pass}
              />
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductBacklog;
