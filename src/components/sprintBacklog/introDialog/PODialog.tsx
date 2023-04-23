/** components */
import Role from '@/components/common/Role';
import Dialog from '@/components/common/Dialog';
import PODialogContent from '@/components/sprintBacklog/introDialog/PODialogContent';

/** utils */
import { RoleDialogProps } from '@/utils/types';
import { roles, themeColors } from '@/utils/const';

const PODialog = ({ duration, delay, visible, onClick }: RoleDialogProps) => {
  return (
    <div className={`flex gap-10`}>
      <Dialog
        duration={duration}
        delay={delay}
        visible={visible}
        showNextButton={true}
        onClick={onClick}
        color={themeColors.PRIMARY}
        label={roles.PO}
      >
        <PODialogContent />
      </Dialog>
      <Role
        role={roles.PO}
        duration={0.3}
        visible={visible}
        className="min-h-[165px]"
      />
    </div>
  );
};

export default PODialog;
