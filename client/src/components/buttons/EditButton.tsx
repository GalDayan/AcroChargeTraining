import React, { Dispatch, FC } from 'react';
import { IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons';

const EditButton: FC<{
  onClick: Dispatch<React.MouseEvent<HTMLButtonElement, MouseEvent>>;
}> = ({ onClick }) => {
  return (
    <IconButton onClick={(e) => onClick(e)}>
      <Edit />
    </IconButton>
  );
};

export default EditButton;
