import styles from './index.module.css'

function Metric({ metricImage, metricName, metricValue }) {
    return (
        <div className={styles.wrapper}>
            <img src={metricImage} alt='metric icon' />
            <div className={styles.metric_name_wrapper}>{metricName}</div>
            <div className={styles.metric_values_wrapper}>{metricValue}</div>
        </div>
    )
}

export default Metric