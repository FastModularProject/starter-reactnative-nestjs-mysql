import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql';

interface CustomSql extends mysql.Connection {
    execute: (query: string, args: any[]) => Promise<any>
}

@Injectable()
export class DatabaseService {
    //A service if you don't want to use typeorm
    //If you use typeorm you can delete it
    /*
    private db;

    constructor(private config: ConfigService) {
        this.db = mysql.createConnection({
            host: this.config.environment.database.host,
            user: this.config.environment.database.user,
            password: this.config.environment.database.password,
            database: this.config.environment.database.database
        }) as CustomSql;

        this.db.connect(function (err) {
            if (err) {
                return console.error('error: ' + err.message);
            }
            console.log('Connected to the MySQL server.');
        });

        this.handleDisconnect(this.db);
    }

    public execute(query, args) {
        return new Promise((resolve, reject) => {
            this.db.query(query, args, function (err, rows, fields) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    };

    public getSqlQuestionMarks(object: Object): string {
        return Object.keys(object).map(() => '?').join(', ');
    }

    private handleDisconnect(myDb: any) {
        myDb.on('error', function (err) {

            console.log('\nRe-connecting lost connection: ' + err.stack);
            myDb.destroy();

            myDb = mysql.createConnection(myDb.config) as CustomSql;
            this.handleDisconnect(myDb);
            myDb.connect();
        });
    }
    */
}

