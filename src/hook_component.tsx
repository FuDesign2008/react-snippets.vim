/**
 *
 * @author fuyg
 * @date  2020-06-03
 */

import React, { ReactElement, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import styles from './HookExample.module.scss'
import { fetchData } from '../sliceName'
import { RootState } from 'src/pages/home/store/rootReducer'

export interface HookExampleProps {
  propName: string
}

function HookExample(props: HookExampleProps): ReactElement {
  // 获取数据
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData({}))
  }, [])

  // 绑定数据
  const { data } = useSelector((state: RootState) => {
    return {
      data: state.sliceName.data,
    }
  }, shallowEqual)

  // TODO

  return <div className={styles.container}></div>
}

export default HookExample
