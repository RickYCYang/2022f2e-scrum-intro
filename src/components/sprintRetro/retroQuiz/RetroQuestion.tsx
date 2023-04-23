/** components */
import Role from '@/components/common/Role';
import Title from '@/components/sprintRetro/retroQuiz/Title';
import Description from '@/components/sprintRetro/retroQuiz/Description';
import RadioButton from '@/components/common/RadioButton';

/** utils */
import { ElementStyleProps } from '@/utils/types';
import type { SprintRetroOption } from '@/utils/types';
import { themeColors } from '@/utils/const';

interface RetroQuestionProps extends ElementStyleProps {
  questionNo: string;
  title: string;
  options: SprintRetroOption[];
  onChange: (questionNo: string, optionId: number) => void;
  disabled: boolean;
}

const RetroQuestion = ({
  questionNo,
  title,
  options,
  onChange,
  disabled,
}: RetroQuestionProps) => {
  return (
    <div className="flex flex-col items-center flex-1">
      <Title title={title} className="mb-10" />
      <div className="flex justify-center gap-8">
        {options.map((option) => {
          const radioButtonColor =
            option.checked === option.isAnswer
              ? themeColors.PRIMARY
              : themeColors.RED;
          return (
            <div
              key={option.id}
              className="flex flex-col items-center gap-4 flex-1 relative "
            >
              <Role
                role={option.role}
                reversed={false}
                className="w-[150px] basis-[130px]"
              />
              <RadioButton
                name={questionNo} // prop name is to group radio buttons
                value={option.desc}
                onChange={() => onChange(questionNo, option.id)}
                checked={option.checked}
                color={radioButtonColor}
                disabled={disabled}
              />
              <Description desc={option.desc} className="min-h-[100px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RetroQuestion;
