import { LoadingButton } from '@mui/lab';
import { Modal, Stack, styled } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const ModalWrapper = styled(Modal)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
})) as typeof Modal;
const CustomModal = styled('div')(({ theme }) => ({
  width: 450,
  height: 200,
  backgroundColor: theme.palette.background.paper,
  padding: 10,
  borderWidth: 0,
  outline: 'none',
  borderRadius: 5,
  boxShadow: '0 2.5px 10px 0 rgba(0, 0, 0, 0.16)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
}));
const ButtonsWrapper = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '90%',
  height: '85%',
})) as typeof Stack;
const ModalHeader = styled(Stack)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '20px',
  textAlign: theme.direction === 'ltr' ? 'left' : 'right',
  padding: 20,
})) as typeof Stack;

function ConfirmationModal({
  confirmation,
  closeConfirmation,
  onSave,
  message,
  isLoading,
}: any) {
  return (
    <ModalWrapper open={confirmation}>
      <CustomModal>
        <ModalHeader>
          <FormattedMessage id="are_you_sure_you_want_to" /> {message}
        </ModalHeader>
        <ButtonsWrapper
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ my: 2 }}
        >
          <LoadingButton
            onClick={closeConfirmation}
            size="large"
            type="submit"
            variant="contained"
            sx={{ mr: 2 }}
          >
            <FormattedMessage id="cancel" />
          </LoadingButton>
          <LoadingButton
            size="large"
            variant="contained"
            onClick={onSave}
            loading={isLoading}
          >
            <FormattedMessage id="confirm" />
          </LoadingButton>
        </ButtonsWrapper>
      </CustomModal>
    </ModalWrapper>
  );
}
export default ConfirmationModal;
