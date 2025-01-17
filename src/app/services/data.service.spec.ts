import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing' ;

import { DataService } from './data.service';
import { USERS } from '../mock-data/user';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(5);
      const secondUser = users.find((user: any) => user.id === 2);
      expect(secondUser.name).toBe('Shashank');
    });

    const mockReq = testingController.expectOne('api/users');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(USERS));
  })

  it('should get user by id', () => {
    service.getUserById(1).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.name).toBe('Rishabh');
    });

    const mockReq = testingController.expectOne('api/users/1');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(USERS[1]);
  })

  afterEach(()=> {
    testingController.verify();
  });

  it('should update the user by id', () => {
    let chages = {age: 24};
    service.updateUser(1, chages).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.id).toBe(1);
    });

    const mockReq = testingController.expectOne('api/users/1');
    expect(mockReq.request.method).toEqual('PUT');
    let modifiedUser = USERS[1];
    modifiedUser.age = 24;
    expect(mockReq.request.body.age).toEqual(chages.age);
    mockReq.flush(USERS[1]);
  })

  afterEach(()=> {
    testingController.verify();
  });


});
