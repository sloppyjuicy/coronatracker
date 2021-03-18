import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

type InfoProps = {
  title: string;
  cases: number;
  total: number;
};

export const InfoBox = (props: InfoProps) => {
  return (
    <div>
      <Card className='infobox'>
        <CardContent>
          <Typography className='title' color='textSecondary'>
            {props.title}
          </Typography>
          <h2 className='cases'>{props.cases}</h2>
          <Typography className='total' color='textSecondary'>
            {props.total} Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
