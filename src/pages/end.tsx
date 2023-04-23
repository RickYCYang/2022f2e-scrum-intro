import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

/** components */
import Main from '@/components/common/Main';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import RoleWithTitle from '@/components/common/RoleWithTitle';

/** images */
import scrumTxt from '../../public/logo/scrum_txt.png';

/** utils */
import { roles } from '@/utils/const';

const delay = 1;

const End = () => {
  const router = useRouter();
  const redirectToHome = () => window.location.replace('/');

  return (
    <div>
      <Head>
        <title>Scrum 任務完成</title>
      </Head>
      <Main>
        <Container className="items-center py-2">
          <div className="w-full flex flex-col items-center mb-8">
            <motion.img
              height={360}
              className="w-2/5 h-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              src={scrumTxt.src}
              alt="scrum"
            />
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay }}
              className="text-white text-xl -mt-4 mb-5"
            >
              恭喜你通過
            </motion.h4>
            <motion.h4
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: delay * 2 }}
              className="text-primary border border-primary bg-black/50 
                          py-5 px-20 rounded-lg text-xl shadow-primary shadow-md
                          "
            >
              《 敏捷任務 - 最初の試煉 》
            </motion.h4>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: delay * 4 }}
            >
              <Button
                outlined
                label="再玩一次"
                onClick={redirectToHome}
                className="border-none"
              />
            </motion.div>
          </div>
          <div className="w-full flex justify-center h-48 overflow-y-hidden gap-10">
            <div className="flex w-1/2 justify-center gap-10">
              <RoleWithTitle
                role={roles.GG}
                title="窩的冰淇淋ㄋ？"
                delay={delay * 3}
              />
              <RoleWithTitle
                role={roles.EE}
                title="嗚嗚我會想尼QQ"
                delay={delay * 3}
              />
            </div>
            <div className="flex w-1/2 justify-center gap-10">
              <RoleWithTitle
                role={roles.MM}
                title="不愧似窩ㄉ學生"
                delay={delay * 3}
              />
              <RoleWithTitle
                role={roles.PO}
                title="哇喔太厲害ㄌㄅ"
                delay={delay * 3}
              />
            </div>
          </div>
        </Container>
      </Main>
    </div>
  );
};

export default End;
