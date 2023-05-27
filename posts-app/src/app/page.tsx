
import CircularImage from '@/components/CircularImg'
import PostFooter from '@/components/PostFooter'
import PostHeader from '@/components/PostHeader'
import PostImg from '@/components/PostImg'
import styles from './page.module.css'
export default function Home() {
  return (
    <div className={styles.layout}>
    <PostHeader></PostHeader>
    <PostImg></PostImg>
    <PostFooter></PostFooter>
    </div>
  )
}
