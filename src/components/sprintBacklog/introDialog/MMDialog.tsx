/** components */
import Role from '@/components/common/Role';
import Dialog from '@/components/common/Dialog';
import MMDialogContent1 from '@/components/sprintBacklog/introDialog/MMDialogContent1';
import MMDialogContent2 from '@/components/sprintBacklog/introDialog/MMDialogContent2';

/** utils */
import { RoleDialogProps } from '@/utils/types';
import { roles, themeColors } from '@/utils/const';

interface MMDialogProps extends RoleDialogProps {
  showMMDialog1: boolean;
  showMMDialog2: boolean;
}

const MMDialog = ({
  duration = 1,
  delay,
  visible,
  onClick,
  showMMDialog1,
  showMMDialog2,
}: MMDialogProps) => {
  return (
    <div className={`flex gap-10 absolute bottom-16`}>
      <Dialog
        duration={duration}
        delay={delay}
        visible={visible}
        showNextButton={true}
        onClick={onClick}
        color={themeColors.PURPLE}
        label={roles.MM}
        className="mb-4"
      >
        <MMDialogContent1 visible={showMMDialog1} duration={duration} />
        <MMDialogContent2 visible={showMMDialog2} duration={duration} />
      </Dialog>
      <Role
        role={roles.MM}
        visible={visible}
        duration={0.3}
        className="min-h-[165px]"
      />
    </div>
  );
};

export default MMDialog;
