import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './../css/InfoBox.css';
import { prettyPrintStat } from './../utils';

type InfoProps = {
  isRed: boolean;
  active: boolean;
  onClick: any;
  title: string;
  cases?: number;
  total?: number;
};

export const InfoBox = (props: InfoProps) => {
  return (
    <Card
      className={`infobox ${props.active && 'infobox--selected'} ${
        props.isRed && 'infobox--isRed'
      }`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography className='title' color='textSecondary'>
          {props.title}
        </Typography>
        <h2 className={`cases ${!props.isRed && 'infobox--notRed'}`}>
          +{prettyPrintStat(props.cases!)}
        </h2>
        <Typography className='total' color='textSecondary'>
          {prettyPrintStat(props.total!)} Total
        </Typography>
      </CardContent>
    </Card>
  );
};
