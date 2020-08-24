import React,{Component} from 'react';
import styles from './style.module.css';
/*
* color: string
*
* */
export default function Loading ({color}) {
  return  (
    <div className={styles.spinner} style={{backgroundColor: color}}></div>
  )
}