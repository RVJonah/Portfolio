from sqlalchemy import Table, Column, Integer, String, MetaData, Float, Date
from sqlalchemy import create_engine
from sqlalchemy.orm import mapper
from backend.database.passwords import db_URI

def initiate_orm():
    db_URL = db_URI
    engine = create_engine(db_URL)
    metadata = MetaData()
    blogs = Table('blogs', metadata,
                Column( 'id', Integer(), primary_key=True),
                Column('title', String(255), nullable=False),
                Column('subtitle', String(255), nullable=False),
                Column('paragraph1', String(1024), nullable=False),
                Column('paragraph2', String(1024),nullable=True),
                Column('paragraph3', String(1024), nullable=True),
                Column('paragraph4', String(1024), nullable=True),
                Column('date', Date(), nullable=False)
            )

    class Blogs(object):
        def __init__(self, id, title, subtitle, paragraph1, paragraph2, paragraph3, paragraph4, date):
            self.id = id
            self.title = title
            self.subtitle = subtitle
            self.paragraph1 = paragraph1
            self.paragraph2 = paragraph2
            self.paragraph3 = paragraph3
            self.paragraph4 = paragraph4
            self.date = date
        #def __repr__(self):
        #    return "<students(id='%i', title='%s', subtitle='%s', paragraph1='%s, paragraph2='%s, paragraph3='%s, paragraph4='%s, date='%d)>" % (
        #    self.id, self.title, self.subtitle, self.paragraph1, self.paragraph2, self.paragraph3, self.paragraph4, self.date)

    mapper(Blogs, blogs)

    metadata.create_all(engine)
    return ({
        'engine': engine,
        'tables': {
            'blogs': Blogs
        },
    })
