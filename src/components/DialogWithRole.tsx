import {
  useRef,
  useEffect,
  useImperativeHandle,
  ReactNode,
  forwardRef,
} from 'react';

/** components */
import Dialog from './Dialog';
import Role from './Role';

/** utils */
import { TRole } from '@/utils/types';
import { dialogColors } from '@/utils/const';
import { transDurationClass } from '@/utils/const';

interface IDialogWithRole {
  roles: [TRole];
  color?: dialogColors;
  children?: ReactNode;
  wrapperAnimate?: boolean;
  dialogAnimate?: boolean;
  roleAnimate?: boolean;
}

const DialogWithRole = forwardRef(
  (
    {
      roles,
      color,
      children,
      wrapperAnimate = true,
      dialogAnimate = true,
      roleAnimate = true,
    }: IDialogWithRole,
    ref
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!wrapperAnimate) return;
      dialogRef.current?.classList.remove('opacity-0');
      dialogRef.current?.classList.add('opacity-100');
    }, [wrapperAnimate]);

    const hideDialog = () => {
      wrapperRef.current?.classList.add('invisible', 'h-0', 'opacity-0');
    };

    useImperativeHandle(
      ref,
      () => {
        return {
          hideDialog,
        };
      },
      []
    );

    return (
      <div
        className={`flex justify-center gap-10 ${
          wrapperAnimate ? `transition-all ${transDurationClass}` : ''
        }`}
        ref={wrapperRef}
      >
        {roles.map((role) => (
          <Role role={role} key={role} animateEffect={roleAnimate} />
        ))}
        <div
          ref={dialogRef}
          className={`${
            wrapperAnimate
              ? 'opacity-0  transition-all delay-700 duration-1000'
              : 'opacity-100'
          }`}
        >
          <Dialog label="PO" color={color} animateEffect={dialogAnimate}>
            {children}
          </Dialog>
        </div>
      </div>
    );
  }
);

DialogWithRole.displayName = 'DialogWithRole';

export default DialogWithRole;
