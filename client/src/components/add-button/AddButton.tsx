import React, { FC, CSSProperties } from 'react';
import { Button, Typography } from '@material-ui/core';

const AddButton: FC<{
  style?: CSSProperties;
  onClick: () => void;
}> = ({ style = {}, onClick }) => {
  return (
    <Button
      type="submit"
      onClick={onClick}
      style={{
        background: '#FF0083',
        color: 'white',
        padding: '1rem',
        fontSize: '1rem',
        fontWeight: 500,
        ...style
      }}
    >
      <Typography>ADD</Typography>
    </Button>
  );
};

export default AddButton;
