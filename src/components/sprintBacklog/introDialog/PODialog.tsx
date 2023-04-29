/** components */
import Role from '@/components/common/Role';
import Dialog from '@/components/common/Dialog';
import PODialogContent from '@/components/sprintBacklog/introDialog/PODialogContent';

/** utils */
import { RoleDialogProps, Role as TRole, Color } from '@/utils/types';

const PODialog = ({ duration, delay, visible, onClick }: RoleDialogProps) => {
  return (
    <div className={`flex gap-10`}>
      <Dialog
        duration={duration}
        delay={delay}
        visible={visible}
        showNextButton={true}
        onClick={onClick}
        color={Color.PRIMARY}
        label={TRole.PO}
      >
        <PODialogContent />
      </Dialog>
      <Role
        role={TRole.PO}
        duration={0.3}
        visible={visible}
        className="min-h-[165px]"
      />
    </div>
  );
};

export default PODialog;
