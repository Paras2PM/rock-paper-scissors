import { memo } from 'react'
import { BigHead } from '@bigheads/core'
import { getRandomOptions } from './bigheads'
import styles from './index.module.css'
import clsx from 'clsx'

function Profil({ playerName, className, nameClassName, avatarClassName, children }) {
    return (
        <div className={clsx(className, styles.avatar_wrapper)}>
            <div className={avatarClassName}>
                <BigHead {...getRandomOptions(playerName)} />
                {children}
            </div>
            <span className={clsx(nameClassName, styles.player_name)}>{playerName}</span>
        </div>
    )
}
export default memo(Profil)