import { useState } from 'react';
import { motion } from 'framer-motion';

/** components */
import RetroQuestion from '@/components/sprintRetro/retroQuiz/RetroQuestion';
import Button from '@/components/common/Button';

/** utils */
import { sprintRetroInitQuiz } from '@/utils/const';
import type {
  ElementStyleProps,
  ButtonSVGClickEvent,
  SprintRetroOption,
  SprintretroQuiz,
} from '@/utils/types';

interface retroQuizProps extends ElementStyleProps {
  showNextFrame: (e: ButtonSVGClickEvent) => void;
  disabled: boolean;
  showReadyButton: boolean;
}

const RetroQuiz = ({
  className,
  visible,
  showNextFrame,
  disabled,
  showReadyButton,
}: retroQuizProps) => {
  const [quiz, setQuiz] = useState(sprintRetroInitQuiz);
  const onChange = (questionNo: string, optionId: number) => {
    setQuiz((prevQuiz) => {
      const updatedOptions: SprintRetroOption[] = [];
      for (const option of prevQuiz[questionNo].options) {
        const updatedOption = { ...option, checked: option.id === optionId };
        updatedOptions.push(updatedOption);
      }
      const updatedQuiz = {
        ...prevQuiz,
        [questionNo]: { ...prevQuiz[questionNo], options: updatedOptions },
      };
      return updatedQuiz;
    });
  };

  const isPassed = (quiz: SprintretroQuiz) => {
    for (const question of Object.values(quiz)) {
      for (const option of question.options) {
        if (option.isAnswer !== option.checked) {
          return false;
        }
      }
    }
    return true;
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={className}
    >
      <div className="flex justify-evenly gap-10">
        {Object.entries(quiz).map(([questionNo, question]) => (
          <RetroQuestion
            key={questionNo}
            questionNo={questionNo}
            title={`${questionNo}. ${question.title}`} //Q1. Title
            options={question.options}
            onChange={onChange}
            disabled={disabled}
          />
        ))}
      </div>
      <input
        className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
        type="radio"
        name="flexRadioDefault"
        id="radioDefault01"
      />
      <Button
        label="我選好了"
        onClick={showNextFrame}
        className="block ml-auto mt-10"
        disabled={!isPassed(quiz)}
        visible={showReadyButton}
      />
    </motion.div>
  );
};

export default RetroQuiz;
