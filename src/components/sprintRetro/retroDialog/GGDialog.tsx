/** components */
import Role from '@/components/common/Role';
import Dialog from '@/components/common/Dialog';
import GGDialogContent1 from '@/components/sprintRetro/retroDialog/GGDialogContent1';
import GGDialogContent2 from '@/components/sprintRetro/retroDialog/GGDialogContent2';
import GGDialogContent3 from '@/components/sprintRetro/retroDialog/GGDialogContent3';

/** utils */
import { RoleDialogProps } from '@/utils/types';
import { roles, themeColors } from '@/utils/const';

interface EEDialogProps extends RoleDialogProps {
  showGGDialog1: boolean;
  showGGDialog2: boolean;
  showGGDialog3: boolean;
}

const GGDialog = ({
  duration = 1,
  delay = 1,
  onClick,
  showGGDialog1,
  showGGDialog2,
  showGGDialog3,
}: EEDialogProps) => {
  return (
    <div className={`flex gap-10 mb-10 items-start`}>
      <Dialog
        duration={duration - 0.5}
        delay={delay}
        visible={true}
        showNextButton={showGGDialog1 || showGGDialog3}
        onClick={onClick}
        color={themeColors.ORANGE}
        label={roles.EE}
        className="mb-4"
      >
        <GGDialogContent1 visible={showGGDialog1} duration={duration} />
        <GGDialogContent2 visible={showGGDialog2} duration={duration} />
        <GGDialogContent3 visible={showGGDialog3} duration={duration} />
      </Dialog>
      <Role role={roles.GG} visible={true} className="min-h-[165px]" />
    </div>
  );
};

export default GGDialog;
