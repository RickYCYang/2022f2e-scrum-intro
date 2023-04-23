/** components */
import Frame1DialogContent from '@/components/productBacklog/backlogDialog/Frame1DialogContent';
import Frame2DialogContent from '@/components/productBacklog/backlogDialog/Frame2DialogContent';
import Frame3DialogContent from '@/components/productBacklog/backlogDialog/Frame3DialogContent';
import Frame4DialogContent from '@/components/productBacklog/backlogDialog/Frame4DialogContent';
import Frame5DialogContent from '@/components/productBacklog/backlogDialog/Frame5DialogContent';
import Dialog from '@/components/common/Dialog';
import Role from '@/components/common/Role';

/** utils */
import { roles } from '@/utils/const';
import { RoleDialogProps } from '@/utils/types';

interface BacklogDialogProps extends RoleDialogProps {
  showFrame1: boolean;
  showFrame2: boolean;
  showFrame3: boolean;
  showFrame4: boolean;
  showFrame5: boolean;
}

const duration = 1;

const BacklogDialog = ({
  showFrame1,
  showFrame2,
  showFrame3,
  showFrame4,
  showFrame5,
  onClick,
}: BacklogDialogProps) => {
  const showNextButton = !showFrame4;
  return (
    <div className={`flex gap-10`}>
      <Role role={roles.PO} duration={0.4} className="min-h-[165px]" />
      <Dialog
        label={roles.PO}
        className="mb-16"
        showNextButton={showNextButton}
        onClick={onClick}
        delay={1}
      >
        <Frame1DialogContent duration={duration} visible={showFrame1} />
        <Frame2DialogContent duration={duration} visible={showFrame2} />
        <Frame3DialogContent duration={duration} visible={showFrame3} />
        <Frame4DialogContent duration={duration} visible={showFrame4} />
        <Frame5DialogContent duration={duration} visible={showFrame5} />
      </Dialog>
    </div>
  );
};

export default BacklogDialog;
