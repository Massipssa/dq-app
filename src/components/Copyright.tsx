import React from 'react';
import { Stack } from 'rsuite';

const Copyright = () => {
  return (
    <Stack className="copyright" justifyContent="center" style={{ height: 40, marginTop: 20 }}>
      <div className="container">
        <p>
          © 2023, Made by{' '}
          <a href="https://github.com/Massipssa/dq-app.git" target="_blank" rel="noreferrer">
            MkData
          </a>
        </p>
      </div>
    </Stack>
  );
};

export default Copyright;
