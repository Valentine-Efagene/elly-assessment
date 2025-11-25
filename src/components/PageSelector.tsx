import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { Button } from './Button'
import './PageSelector.css'

export function PageSelector() {
    const [allPages, setAllPages] = useState(false)
    const [pages, setPages] = useState({
        page1: false,
        page2: false,
        page3: false,
        page4: false,
    })

    const handleAllPagesChange = (checked: boolean) => {
        setAllPages(checked)
        setPages({
            page1: checked,
            page2: checked,
            page3: checked,
            page4: checked,
        })
    }

    const handlePageChange = (page: keyof typeof pages, checked: boolean) => {
        const newPages = { ...pages, [page]: checked }
        setPages(newPages)

        // Update "All Pages" if all individual pages are checked
        const allChecked = Object.values(newPages).every(v => v)
        setAllPages(allChecked)
    }

    const handleDone = () => {
        console.log('Selected pages:', { allPages, ...pages })
    }

    return (
        <div className="page-selector">
            <Checkbox
                checked={allPages}
                onChange={handleAllPagesChange}
                label="All Pages"
            />

            <div className="separator"></div>

            <Checkbox
                checked={pages.page1}
                onChange={(checked) => handlePageChange('page1', checked)}
                label="Page 1"
            />
            <Checkbox
                checked={pages.page2}
                onChange={(checked) => handlePageChange('page2', checked)}
                label="Page 2"
            />
            <Checkbox
                checked={pages.page3}
                onChange={(checked) => handlePageChange('page3', checked)}
                label="Page 3"
            />
            <Checkbox
                checked={pages.page4}
                onChange={(checked) => handlePageChange('page4', checked)}
                label="Page 4"
            />

            <div className="separator"></div>

            <Button onClick={handleDone}>Done</Button>
        </div>
    )
}
