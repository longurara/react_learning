import { Card, Container, Tab, Tabs } from 'react-bootstrap'

const newsItems = {
    latest: [
        'Club season reviews are now available for every player.',
        'Explore market values and player biographies in the directory.',
    ],
    transfers: [
        'Track the latest transfer stories across Europe.',
        'Compare clubs and positions from the player directory.',
    ],
    highlights: [
        'Open any player profile to watch the embedded highlight video.',
        'New video clips will be added as the collection grows.',
    ],
}

function NewsList({ items }) {
    return (
        <div className="pt-3">
            {items.map((item) => (
                <Card key={item} className="mb-3">
                    <Card.Body>{item}</Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default function News() {
    return (
        <Container className="py-4">
            <h1 className="mb-4">Football news</h1>
            <Tabs defaultActiveKey="latest" id="news-tabs" fill>
                <Tab eventKey="latest" title="Latest">
                    <NewsList items={newsItems.latest} />
                </Tab>
                <Tab eventKey="transfers" title="Transfers">
                    <NewsList items={newsItems.transfers} />
                </Tab>
                <Tab eventKey="highlights" title="Highlights">
                    <NewsList items={newsItems.highlights} />
                </Tab>
            </Tabs>
        </Container>
    )
}
