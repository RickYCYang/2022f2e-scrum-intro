import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

/** components */
import Progressbar from '@/components/common/Progressbar';
import EnterVillage from '@/components/entrance/EnterVillage';
import Layer1BgImgs from '@/components/entrance/Layer1BgImgs';
import Layer2BgImgs from '@/components/entrance/Layer2BgImgs';
import AcceptDialog from '@/components/entrance/AcceptDialog';

const duration = 1;
const delay = 1;

export default function Home() {
  const router = useRouter();
  const [showEnterVillage, setShowEnterVillage] = useState<Boolean>(true);
  const [showLayer1BgImgs, setShowLayer1BgImgs] = useState<Boolean>(true);
  const [showLayer2BgImgs, setShowLayer2BgImgs] = useState<Boolean>(true);
  const [showAcceptDialog, setShowAcceptDialog] = useState<Boolean>(false);

  const enterVillage = (_e: React.MouseEvent<HTMLButtonElement>) => {
    setShowEnterVillage(false);
    setShowLayer2BgImgs(false);
    setShowAcceptDialog(true);
  };

  const acceptChallenge = () => {
    setShowAcceptDialog(false);
    setShowLayer1BgImgs(false);
    /** wait for animation */
    setTimeout(() => {
      router.push('product-backlog');
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Scrum 新手村</title>
      </Head>
      <main
        className="h-screen relative overflow-hidden
        flex flex-col justify-center items-center"
      >
        <Progressbar value={0} />
        <AnimatePresence>
          {showLayer1BgImgs && (
            <Layer1BgImgs duration={duration} delay={delay / 2} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showLayer2BgImgs && (
            <Layer2BgImgs duration={duration} delay={delay} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showEnterVillage && (
            <EnterVillage enterVillage={enterVillage} duration={duration} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showAcceptDialog && (
            <AcceptDialog
              acceptChallenge={acceptChallenge}
              duration={duration}
              delay={delay}
            />
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
