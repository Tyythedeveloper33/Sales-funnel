from .db import db, environment, SCHEMA, add_prefix_for_prod

class Questionnaire(db.Model):
    __tablename__ = 'questionnaires'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.Text)
    last_updated = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def __repr__(self):
        return f'<Questionnaire {self.question} for User {self.user_id}>'
