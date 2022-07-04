// material
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

// component
import Iconify from '@/components/Iconify';

// ----------------------------------------------------------------------

export default function UserMoreMenu({ id }: { id: string }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }} onClick={() => navigate(`${id}/show`)}>
          <ListItemIcon>
            <Iconify icon="carbon:view" width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary={<FormattedMessage id="show" />}
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>

        <MenuItem sx={{ color: 'text.secondary' }} onClick={() => navigate(`${id}/edit`)}>
          <ListItemIcon>
            <Iconify icon="eva:edit-fill" width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary={<FormattedMessage id="edit" />}
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}
